import { IsNotEmpty, Max, IsDate, MaxLength, IsISO8601 } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCommissionDto {
  @ApiModelProperty({required: true, maxLength: 255})
  @MaxLength(255)
  name: string;

  @ApiModelProperty({required: true})
  @IsNotEmpty()
  description: string;

  @ApiModelProperty({required: true, format: 'ISO 8601'})
  @IsISO8601()
  created: Date;
}
