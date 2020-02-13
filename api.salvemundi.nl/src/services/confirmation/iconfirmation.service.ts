import { Confirmation } from '../../entities/confirmation.entity';
import { User } from '../../entities/core/user.entity';

export interface IConfirmationService {
    create(user: User): Promise<Confirmation>;
    readOne(token: string): Promise<Confirmation>;
}
