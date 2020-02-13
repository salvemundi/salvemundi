import {interfaces} from "inversify";

import { AccountancyService } from './api/accountancy.service';
import { AuthorizationService } from './api/authorization.service';
import { CommitteeService } from './api/committee.service';
import { DefaultService } from './api/default.service';
import { PaymentsService } from './api/payments.service';
import { UserService } from './api/user.service';

export class ApiServiceBinder {
    public static with(container: interfaces.Container) {
        container.bind<AccountancyService>("AccountancyService").to(AccountancyService).inSingletonScope();
        container.bind<AuthorizationService>("AuthorizationService").to(AuthorizationService).inSingletonScope();
        container.bind<CommitteeService>("CommitteeService").to(CommitteeService).inSingletonScope();
        container.bind<DefaultService>("DefaultService").to(DefaultService).inSingletonScope();
        container.bind<PaymentsService>("PaymentsService").to(PaymentsService).inSingletonScope();
        container.bind<UserService>("UserService").to(UserService).inSingletonScope();
    }
}
