import { GetParksSlots } from 'src/domain/interface/GetParkSlot.interface';
import { GetParksSlotsService } from 'src/domain/services/getParksSlots.service';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'; // Importez Response de express

@Controller()
export class GetParksSlotsController {
  constructor(private readonly getParksSlotsService: GetParksSlotsService) {}

  @Get('/getParks')
  async getParksSlots(@Res() res: Response) {
    const parks = await this.getParksSlotsService.getParksSlots();
    return res.status(200).json(parks);
  }
}
