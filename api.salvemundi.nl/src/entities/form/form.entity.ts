import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { FormEntry } from "./formEntry.entity";
import { FormField } from "./formField.entity";

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
}
