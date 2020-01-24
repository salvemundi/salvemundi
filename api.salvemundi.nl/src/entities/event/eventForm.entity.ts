import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne } from "typeorm";
import { Event } from "./event.entity";
import { EventFormField } from "./eventFormField.entity";

@Entity()
export class EventForm extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Event)
    event: Event;

    @OneToMany(type => EventFormField, field => field.form)
    fields: EventFormField[];

}