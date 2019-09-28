import {interfaces} from 'inversify';

import { AuthorizationService } from './api/authorization.service';
import { CommitteeService } from './api/committee.service';
import { UserService } from './api/user.service';

export class ApiServiceBinder {
    public static with(container: interfaces.Container) {
        container.bind<AuthorizationService>('AuthorizationService').to(AuthorizationService).inSingletonScope();
        container.bind<CommitteeService>('CommitteeService').to(CommitteeService).inSingletonScope();
        container.bind<UserService>('UserService').to(UserService).inSingletonScope();
    }
}
