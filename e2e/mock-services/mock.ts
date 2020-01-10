import { interfaces } from "inversify";
import { AuthorizationService } from '../../src/openapi/api/authorization.service';
import { AuthorizationServiceMock } from './authorization.service.mock';
import { PaymentsServiceMock } from './payments.service.mock';
import { PaymentsService } from '../../src/openapi/api/payments.service';

export class MockServiceBinder {
    public static with(container: interfaces.Container) {
        container.bind<AuthorizationService>("AuthorizationService").to(AuthorizationServiceMock).inSingletonScope();
        container.bind<PaymentsService>("PaymentsService").to(PaymentsServiceMock).inSingletonScope();
    }
}
