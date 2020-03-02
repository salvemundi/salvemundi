import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Form } from "./form.entity";

@Entity()
export class FormField extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Form,
    form => form.fields
  )
  form: Form;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  label: string;

  @Column({ nullable: true })
  placeholder: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  pattern: string;

  @Column({ nullable: true })
  autocomplete: string;

  @Column({ default: false })
  required: boolean;
}
