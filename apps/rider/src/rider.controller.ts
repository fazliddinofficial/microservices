import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: any) {
    return Promise.resolve({
      id: data.id,
      name: 'Tom Cruse',
      email: 'tomcruse@gamil.com',
    });
    // there should be controller that fetches the data from db
  }
}

// producer
