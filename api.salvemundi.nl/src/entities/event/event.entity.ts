import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Form } from "../form/form.entity";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../core/user.entity";
import { Committee } from "../core/committee.entity";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column({
    type: "longtext"
  })
  public description: string;

  @Column({ nullable: true })
  public startDate?: Date;

  @Column({ nullable: true })
  public endDate?: Date;

  @Column({ nullable: true, default: true })
  public memberOnly?: boolean;

  @Column({ nullable: true })
  public paymentAfter?: Date;

  @Column({ default: false })
  public active: boolean;

  @Column({ nullable: true })
  public signupBefore: Date;

  @Column({ nullable: true })
  public memberPrice?: number;

  @Column({ nullable: true })
  public notMemberPrice?: number;

  @Column({ nullable: true, type: "longtext"   })
  public extraMailInformation?: string;

  @OneToOne(type => Form, { eager: true, nullable: true })
  @JoinColumn()
  public form: Form;

  @ManyToOne(type => User, { nullable: true })
  public createdBy: User;

  @ManyToOne(type => Committee, { nullable: true })
  public committee: Committee;
}
