import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Transaction } from "../transaction.entity";
import { User } from "../user.entity";
import { Form } from "./form.entity";
import { FormEntryField } from "./formEntryField.entity";

@Entity()
export class FormEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(type => User, { nullable: true })
  public user?: User;

  @Column({ nullable: true })
  public email: string;

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
