import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { EventForm } from "./eventForm.entity";

@Entity()
export class EventFormField extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => EventForm, eventForm => eventForm.fields)
    form: EventForm;

    @Column()
    name: string;

    @Column()
    label: string

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