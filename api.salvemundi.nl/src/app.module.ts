import { Module } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ScheduleModule } from "nest-schedule";
import { AccountancyController } from "./controllers/accountancy/accountancy.controller";
import { AuthorizationController } from "./controllers/authorization/authorization.controller";
import { CommitteeController } from "./controllers/committee/committee.controller";
import { EventController } from "./controllers/event/event.controller";
import { PaymentController } from "./controllers/payment/payment.controller";
import { WebhookController } from "./controllers/payment/webhook.controller";
import { UserController } from "./controllers/user/user.controller";
import { AuthorizationGuard } from "./guards/auth.guard";
import { ScopeInterceptor } from "./interceptor/scope.interceptor";
import { AccountancyJop } from "./jops/accountancy.jop";
import { ScopeSeeder } from "./seed/scope.seed";
import { AccountancyService } from "./services/accountancy/accountancy.service";
import { AuthorizationService } from "./services/authorization/authorization.service";
import { CommitteeService } from "./services/committee/committee.service";
import { ConfirmationService } from "./services/confirmation/confirmation.service";
import { EmailService } from "./services/email/email.service";
import { EventService } from "./services/event/event.service";
import { FileService } from "./services/file/file.service";
import { MemberService } from "./services/member/member.service";
import { PaymentService } from "./services/payment/payment.service";
import { UserService } from "./services/user/user.service";
import { FormService } from "./services/form/form.service";

@Module({
  imports: [ScheduleModule.register()],
  controllers: [
    CommitteeController,
    UserController,
    AuthorizationController,
    PaymentController,
    WebhookController,
    EventController,
    AccountancyController
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthorizationGuard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ScopeInterceptor
    },
    AccountancyJop,
    CommitteeService,
    MemberService,
    UserService,
    AuthorizationService,
    PaymentService,
    ScopeSeeder,
    EmailService,
    ConfirmationService,
    EventService,
    FormService,
    FileService,
    AccountancyService
  ]
})
export class AppModule {}
