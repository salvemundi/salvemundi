import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MailTemplate } from "./mailTemplate.entity";

@Entity()
export class MailVariable extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  public mailTemplate: MailTemplate;

  @Column()
  public name: string;
}
