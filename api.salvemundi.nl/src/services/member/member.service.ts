import { Injectable } from '@nestjs/common';
import { IMemberService } from './imember.service';
import { User } from '../../entities/core/user.entity';
import { Membership } from '../../entities/core/membership.entity';
import { BaseEntity } from 'typeorm';

@Injectable()
export class MemberService implements IMemberService {
  async giveMembership(
    user: User,
    startDate: Date = new Date(),
    endDate: Date = null
  ) {
    if (!endDate) {
      endDate = new Date(new Date().setFullYear(startDate.getFullYear() + 1));
    }

    giveMembership(user: User, startDate: Date = new Date(), endDate: Date = null) {
        if (!endDate) {
            endDate = new Date(new Date().setFullYear(startDate.getFullYear() + 1));
        }

        const membership: Membership = new Membership(startDate, endDate);
        membership.user = user;
        return membership.save();
    }
  }

    removeMembership(user: User) {
        const memberships: Membership[] = user.memberships;
        const activeMembership = memberships.find(x => x.startDate >= new Date() && x.endDate <= new Date());

        if (activeMembership) {
            return activeMembership.remove();
        }
    }

    public save<T extends BaseEntity>(entity: T): Promise<T> {
        return entity.save();
    }
}
