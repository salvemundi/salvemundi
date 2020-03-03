import { Controller, Post, Body, Get, Query, NotFoundException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { PaymentService } from '../../services/payment/payment.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../entities/user.entity';
import IPurchasable from '../../entities/interface/purchasable.interface';
import { membershipPrice, membershipDescription } from '../../../constants';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Payment } from '@mollie/api-client';
import { PaymentDTO } from '../../dto/payment/paymentDTO';
import { Event } from '../../entities/event/event.entity';
import { EventService } from '../../services/event/event.service';
import { FormService } from '../../services/form/form.service';
import { FormEntry } from '../../entities/form/formEntry.entity';
import { MemberService } from '../../services/member/member.service';

@Controller('/payments')
@ApiTags('Payments')
export class PaymentController {
    constructor(
        readonly paymentService: PaymentService,
        readonly userService: UserService,
        readonly eventService: EventService,
        readonly formService: FormService,
        readonly memberService: MemberService
    ) { }

    @Get('/membership')
    @ApiOperation({
        summary: 'membership',
        description: 'This call is creates a payment for a new membership',
    })
    @ApiResponse({ status: 200, description: 'Payment created', type: PaymentDTO })
    @ApiResponse({ status: 404, description: 'User is not found' })
    @ApiResponse({ status: 500, description: 'Internal server error...' })
    public async createPaymentForMembership(@Query('id') userId: number): Promise<PaymentDTO> {
        const user: User = await this.userService.readOne(userId);
        if (!user) {
            throw new NotFoundException('User is not found...');
        }

        const event: IPurchasable = {
            price: membershipPrice,
            description: membershipDescription,
        };

        const payment: Payment = await this.paymentService.createPayment(user, event, 'checkEmail', 'membership');
        if (!payment) {
            throw new ServiceUnavailableException();
        }

        const result: PaymentDTO = {
            expiresAt: payment.expiresAt,
            url: payment._links.checkout,
        };
        return result;
    }

    @Get('/events')
    public async createPaymentForEvents(@Query('id') formEntryId: number): Promise<PaymentDTO> {
        const entry: FormEntry = await this.formService.getFormEntry(formEntryId);
        console.log(entry);
        const email: string = '';

        const event: Event = null;

        let price: number = event.memberPrice;
        if (!this.memberService.isMember(email)) {
            if (event.memberOnly) {
                throw new UnauthorizedException();
            }
            price = event.notMemberPrice;
        }

        const eventPurchase: IPurchasable = {
            price,
            description: event.title,
        };

        const payment: Payment = await this.paymentService.createPayment(null, eventPurchase, 'completedEvent', 'events', {});
        if (!payment) {
            throw new ServiceUnavailableException();
        }

        const result: PaymentDTO = {
            expiresAt: payment.expiresAt,
            url: payment._links.checkout,
        };
        return result;
    }
}
