import { Controller, Get, Query, NotFoundException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { PaymentService } from '../../services/payment/payment.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../entities/core/user.entity';
import IPurchasable from '../../entities/interface/purchasable.interface';
import { membershipPrice, membershipDescription, membershipRenewalDescription } from '../../../constants';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Payment } from '@mollie/api-client';
import { PaymentDTO } from '../../dto/payment/paymentDTO';
import { ConfirmationService } from '../../services/confirmation/confirmation.service';
import { Confirmation } from '../../entities/core/confirmation.entity';
import { FormEntry } from '../../entities/form/formEntry.entity';
import { MemberService } from '../../services/member/member.service';
import { Event } from '../../entities/event/event.entity';
import { FormService } from '../../services/form/form.service';

@Controller('/payments')
@ApiTags('Payments')
export class PaymentController {
    constructor(
        private readonly paymentService: PaymentService,
        private readonly userService: UserService,
        private readonly confirmationService: ConfirmationService,
        private readonly memberService: MemberService,
        private readonly formService: FormService
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

        return this.getMembershipPayment(user, 'checkEmail', 'membership');
    }

    @Get('/membership-renewal')
    @ApiOperation({
        summary: 'membership',
        description: 'This call is creates a payment for a new membership',
    })
    @ApiResponse({ status: 200, description: 'Payment created', type: PaymentDTO })
    @ApiResponse({ status: 404, description: 'User is not found' })
    @ApiResponse({ status: 500, description: 'Internal server error...' })
    public async createPaymentForRenewalMembership(@Query('token') token: string): Promise<PaymentDTO> {
        const confirmation: Confirmation = await this.confirmationService.readOne(token);
        if (!confirmation) {
            throw new NotFoundException('Token is invalid...');
        }

        this.confirmationService.delete(confirmation);
        return this.getMembershipPayment(confirmation.user, 'renew', 'membership-renewal');
    }

    private async getMembershipPayment(user: User, redirect: string, webhook: string) {
        const membership: IPurchasable = {
            price: membershipPrice,
            description: redirect === 'renew' ? membershipRenewalDescription : membershipDescription,
        };

        const payment: Payment = await this.paymentService.createPayment(user, membership, redirect, webhook);
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


        // NEED TO FIX

        // if (!this.memberService.isMember(email)) { 
        //     if (event.memberOnly) {
        //         throw new UnauthorizedException();
        //     }
        //     price = event.notMemberPrice;
        // }

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
