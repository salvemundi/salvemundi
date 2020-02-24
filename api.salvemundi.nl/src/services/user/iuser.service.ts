import { User } from '../../entities/core/user.entity';
import { BaseEntity } from 'typeorm';

export interface IUserService {
    readAll(skip?: number, take?: number): Promise<User[]>;
    readOne(id: number | string): Promise<User>;
    delete<T extends BaseEntity>(user: T): Promise<T>;
    save<T extends BaseEntity>(user: T): Promise<T>;

    exists(email: string): Promise<boolean>;
}
