import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class PageView extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({ unique: true })
    @ApiProperty({type: String, format: 'date'})
    public date: Date;

    @Column()
    @ApiProperty()
    public count: number;
}
