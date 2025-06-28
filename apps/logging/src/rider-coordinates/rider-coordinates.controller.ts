import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/createCoordinate.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'No shit!';
  }

  @Post()
  saveRiderCoordinate(@Body() createCoordinatesDto: CreateCoordinatesDto) {
    return createCoordinatesDto;
  }
}
