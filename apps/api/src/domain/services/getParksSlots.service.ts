import { Injectable } from '@nestjs/common';
import { ParkSlotRepository } from '../interface/ParkSlotRepository.interface';

@Injectable()
export class GetParksSlotsService {
  constructor(private readonly parkSlotRepository: ParkSlotRepository) {}

  async getParksSlots(): Promise<any[]> {
    const parks = await this.parkSlotRepository.findAll();
    return parks;
  }
}
