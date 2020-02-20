import { IUserService } from './iuser.service';
import { User } from '../../entities/core/user.entity';
import { BaseEntity } from 'typeorm';

export const USER_RELATIONS = ['scopes', 'memberships'];

export class UserService implements IUserService {
    readAll(skip?: number, take?: number): Promise<User[]> {
        return User.find({ skip, take, relations: USER_RELATIONS, where: { activated: true } });
    }

    readOne(user: number, email?: string): Promise<User> {
        const whereQuery = { id: user };
        if (email) {
            // tslint:disable-next-line: no-string-literal
            whereQuery['email'] = email;
        }

        return User.findOne({ where: whereQuery, relations: USER_RELATIONS });
    }

    delete<T extends BaseEntity>(entity: T): Promise<T> {
        return entity.remove();
    }

    save<T extends BaseEntity>(entity: T): Promise<T> {
        return entity.save();
    }

    async exists(email: string): Promise<boolean> {
        return (await User.count({where: { email }})) > 0;
    }
}
