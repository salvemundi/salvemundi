import { Confirmation } from '../../entities/core/confirmation.entity';
import { User } from '../../entities/core/user.entity';
import { BaseEntity } from 'typeorm';

export interface IConfirmationService {
    create(user: User): Promise<Confirmation>;
    readOne(token: string): Promise<Confirmation>;
    delete<T extends BaseEntity>(entity: T): Promise<T>;
}
