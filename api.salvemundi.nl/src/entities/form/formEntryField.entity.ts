import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany
} from "typeorm";
import { FormEntry } from "./formEntry.entity";
import { FormField } from "./formField.entity";

@Entity()
export class FormEntryField extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToMany(
    type => FormEntry,
    formEntry => formEntry.fields
  )
  public entry: FormEntry;

  @ManyToOne(type => FormField)
  field: FormField;

  @Column()
  public value: any;
}
