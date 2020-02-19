import { Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user.entity";
import { MailVariable } from "./mailVariable.entity";

@Entity()
export class MailTemplate extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  public creator: User;

  public template: string;

  public variables: MailVariable[];
}
