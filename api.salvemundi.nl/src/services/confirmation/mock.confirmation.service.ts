import { IConfirmationService } from './iconfirmation.service';
import { Confirmation } from '../../entities/core/confirmation.entity';
import { User } from '../../entities/core/user.entity';
import { BaseEntity } from 'typeorm';

export class MockConfirmationService implements IConfirmationService {
    delete<T extends BaseEntity>(entity: T): Promise<T> {
        return new Promise<T>((resolve) => {
            resolve(null);
        });
    }
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
