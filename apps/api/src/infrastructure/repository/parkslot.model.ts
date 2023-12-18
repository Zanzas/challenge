import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ParkSlotDocument = HydratedDocument<ParkSlot>;

@Schema()
export class ParkSlot {
  @Prop({ required: 'true' })
  id: string;

  @Prop({ required: 'true' })
  address: string;

  @Prop({ required: 'true' })
  startDate: string;

  @Prop({ required: 'true' })
  endDate: string;

  @Prop({ required: 'true' })
  price: number;
}

export const ParkSlotModelName = ParkSlot.name;

export const ParkSlotSchema = SchemaFactory.createForClass(ParkSlot);
