import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controller/app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkSlotModule } from './parkslot.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/park'),
    ParkSlotModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
