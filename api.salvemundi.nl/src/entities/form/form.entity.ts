import {
  BaseEntity,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { FormField } from "./formField.entity";
import { FormEntry } from "./formEntry.entity";
import { MailTemplate } from "../mail/mailTemplate.entity";

@Entity()
export class Form extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    type => FormField,
    field => field.form
  )
  fields: FormField[];

  @ManyToMany(
    type => FormEntry,
    entry => entry.form
  )
  public entries: FormEntry[];

  public confirmationMail: MailTemplate;
}
