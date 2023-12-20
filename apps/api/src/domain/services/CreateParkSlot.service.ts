import { Inject } from '@nestjs/common';
import { createParkDTO } from 'src/dto/createPark.dto';
import { ParkSlot } from 'src/domain/entities/ParkSlot';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';

export class createParkSlot {
  public constructor(
    @Inject(ParkSlotRepository)
    private parkSlotRepository: ParkSlotRepository,
  ) {}

  public async handle(payload: createParkDTO): Promise<void> {
    const slot = ParkSlot.createByUser(payload);

    await this.parkSlotRepository.create(slot);
  }
}
