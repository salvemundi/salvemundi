import { BaseEntity, PrimaryGeneratedColumn, Entity, Column, ManyToOne, ManyToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "../user.entity";
import { EventSignup } from "./eventFormSignup.entity";
import { Committee } from "../committee.entity";
import { EventForm } from "./eventForm.entity";

@Entity()
export class Event extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public startDate: Date;

    @Column()
    public endDate: Date;

    @Column()
    public signupBefore: Date;

    @Column()
    public memberOnly: boolean;

    @Column()
    public memberPrice: number;

    @Column()
    public notMemberPrice: number;

    @Column()
    public active: boolean;

    @OneToOne(type => EventForm)
    @JoinColumn()
    public form: EventForm;

    @ManyToOne(type => User)
    public createdBy: User;

    @ManyToOne(type => Committee)
    public committee: Committee;

    @ManyToMany(type => EventSignup, eventSignup => eventSignup.user)
    public eventSignUps: EventSignup[];


}