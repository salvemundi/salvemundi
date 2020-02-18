import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany
} from "typeorm";
import { User } from "../user.entity";
import { Transaction } from "../transaction.entity";
import { Form } from "./form.entity";
import { FormEntryField } from "./formEntryField.entity";

@Entity()
export class FormEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(type => User, { nullable: true })
  public user?: User;

  @ManyToOne(type => Form)
  public form: Form;

  @OneToMany(
    type => FormEntryField,
    entryField => entryField.entry
  )
  fields: FormEntryField[];

  @ManyToOne(type => Transaction, { nullable: true })
  public transaction?: Transaction;

  @Column({ default: false })
  public cancelled: boolean;
}
