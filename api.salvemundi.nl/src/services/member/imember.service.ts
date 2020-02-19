import { User } from "../../entities/user.entity";

export interface IMemberService {
  giveMembership(user: User, startDate: Date, endDate: Date): void;
  removeMembership(user: User);
}
