import { ParkSlot } from 'src/domain/entities/ParkSlot';

export interface GetParksSlots {
  findAll(): Promise<ParkSlot[]>;
}
