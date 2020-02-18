import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Committee } from "../committee.entity";
import { User } from "../user.entity";
import { Form } from "../form/form.entity";

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
  public paymentAfter: Date;

  @Column()
  public memberPrice: number;

  @Column()
  public notMemberPrice: number;

  @Column()
  public active: boolean;

  @OneToOne(type => Form)
  @JoinColumn()
  public form: Form;

  @ManyToOne(type => User)
  public createdBy: User;

  @ManyToOne(type => Committee)
  public committee: Committee;
}
