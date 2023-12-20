import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({ required: 'true' })
  id: string;

  @Prop({ required: 'true' })
  usurname: string;
}

export const UsersModelName = Users.name;

export const UsersSchema = SchemaFactory.createForClass(Users);
