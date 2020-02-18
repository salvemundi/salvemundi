import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Form } from "./form.entity";

@Entity()
export class FormField extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Form, form => form.fields)
    form: Form;

    @Column()
    name: string;

    @Column()
    label: string;

    @Column()
    placeholder: string;

    @Column()
    description: string;

    @Column()
    type: string;

    @Column()
    pattern: string;

    @Column()
    autocomplete: string;

    @Column()
    required: boolean;

}