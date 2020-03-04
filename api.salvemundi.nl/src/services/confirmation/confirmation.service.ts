import { Injectable } from '@nestjs/common';
import { User } from '../../entities/core/user.entity';
import { Confirmation } from '../../entities/core/confirmation.entity';
import * as uuidv4 from 'uuid/v4';
import { IConfirmationService } from './iconfirmation.service';
import { BaseEntity } from 'typeorm';

@Injectable()
export class ConfirmationService implements IConfirmationService {
    public create(user: User): Promise<Confirmation> {
        const confirmation = new Confirmation();
        confirmation.user = user;
        confirmation.token = uuidv4();

        return confirmation.save();
    }

    public readOne(token: string): Promise<Confirmation> {
        return Confirmation.findOne({where: {token}, relations: ['user']});
    }

    public delete<T extends BaseEntity>(entity: T): Promise<T> {
        return entity.remove();
    }
}
