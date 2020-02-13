import { IConfirmationService } from './iconfirmation.service';
import { Confirmation } from '../../entities/core/confirmation.entity';
import { User } from '../../entities/core/user.entity';

export class MockConfirmationService implements IConfirmationService {
    create(user: User): Promise<Confirmation> {
        return new Promise<Confirmation>((resolve) => {
            resolve(null);
        });
    }
    readOne(token: string): Promise<Confirmation> {
        return new Promise<Confirmation>((resolve) => {
            resolve(null);
        });
    }

}
