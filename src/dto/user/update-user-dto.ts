import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiModelProperty({required: true})
    @IsNotEmpty()
    public id: number;

    @ApiModelProperty({required: true})
    @IsNotEmpty()
    public pcn: string;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public firstName: string;

    @ApiModelProperty({required: false, maxLength: 255})
    public middleName: string;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public lastName: string;

    @ApiModelProperty({required: true, type: String, format: 'date'})
    @IsNotEmpty()
    public birthday: Date;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public address: string;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public postalcode: string;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public city: string;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public country: string;

    @ApiModelProperty({required: true, maxLength: 10})
    @IsNotEmpty()
    public phoneNumber: string;

    @ApiModelProperty({required: true, maxLength: 255})
    @IsNotEmpty()
    public email: string;
}