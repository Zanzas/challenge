import { IsNotEmpty, IsString } from 'class-validator';

export class Users {
  @IsNotEmpty()
  @IsString()
  username: string;
}
