import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/logs_db'),
    RiderCoordinatesModule,
  ],
  controllers: [],
  providers: [],
})
export class LoggingModule {}
