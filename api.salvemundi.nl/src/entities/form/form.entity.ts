import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne
} from "typeorm";
import { FormEntry } from "./formEntry.entity";
import { FormField } from "./formField.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Event } from "../event/event.entity";

@Entity()
export class Form extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  requireEmail: boolean;

  @OneToOne(type => Event)
  public event: Event;

  @OneToMany(
    type => FormField,
    field => field.form,
    {
      eager: true
    }
  )
  fields: FormField[];

  @ManyToMany(
    type => FormEntry,
    entry => entry.form
  )
  public entries: FormEntry[];
}
