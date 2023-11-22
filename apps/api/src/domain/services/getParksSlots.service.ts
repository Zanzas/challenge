import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParkSlot } from '../entities/ParkSlot';

@Injectable()
export class GetParksSlotsService {
  constructor(@InjectModel('ParkSlot') private readonly parkSlotModel: Model<ParkSlot>) {}

  async getParksSlots(): Promise<ParkSlot[]> {
    return this.parkSlotModel.find().exec();
  }
}
