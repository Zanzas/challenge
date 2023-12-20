import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParkDTO {
  @IsNotEmpty()
  UserID: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  price: number;
}
