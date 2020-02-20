import { Injectable } from '@nestjs/common';
import { NestSchedule, Cron } from 'nest-schedule';
import { UserService } from '../services/user/user.service';
import { EmailService } from '../services/email/email.service';
import { ConfirmationService } from '../services/confirmation/confirmation.service';
import { MemberService } from '../services/member/member.service';

@Injectable()
export class RenewalJop extends NestSchedule {

    constructor(
        private readonly userService: UserService,
        private readonly emailService: EmailService,
        private readonly confirmationService: ConfirmationService,
        private readonly memberService: MemberService,
    ) {
        super();
    }

    @Cron('*/1 * * * *')
    async handleJop() {
        console.log('Ey fakka')
        const plusOneMonth = new Date();
        plusOneMonth.setMonth(plusOneMonth.getMonth() + 1);

        const plusThreeMonth = new Date();
        plusThreeMonth.setMonth(plusThreeMonth.getMonth() + 3);

        for (const user of await this.userService.readAll()) {
            const dates = user.memberships.map(x => x.endDate);

            if (// Check if membership has expired
                Date.now() > new Date(Math.max.apply(null, dates)).getTime() &&
                // Check if email is valid
                this.validateEmail(user.email)) {

                    const membership = user.memberships.find(x => x.endDate.getTime() === Math.max.apply(null, dates));
                    // Check if reminder has never been sent or if reminder has been sent 1 month or longer before
                    if (!membership.reminderRenewal || membership.reminderRenewal >= plusOneMonth) {

                        if (membership.endDate >= plusThreeMonth) {
                            user.activated = false;
                            this.userService.save(user);
                            continue;
                        }

                        const confirmation = await this.confirmationService.create(user);
                        await this.emailService.sendRenewalEmail(user, confirmation);

                        membership.reminderRenewal = new Date();
                        await this.memberService.save(membership);
                    }
            }
        }
    }

    private validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
