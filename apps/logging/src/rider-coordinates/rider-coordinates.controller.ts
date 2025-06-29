import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/createCoordinate.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { UpdateRiderCoordinatesDto } from './dto/updateCoordinate.dto';
import { ID } from 'apps/logging/common/types';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private riderService: RiderCoordinatesService) {}

  @Get(":id")
  async getRiderCoordinates(
    @Param()
    params: any,
  ) {
    return this.riderService.getRiderCoordinates(params.id);
  }

  @Post()
  async saveRiderCoordinate(
    @Body() createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return this.riderService.saveRiderCoordinate(createCoordinatesDto);
  }

  @Put()
  async updateRiderCoordinate(
    @Param('id') id: ID,
    @Body() dto: UpdateRiderCoordinatesDto,
  ) {
    return this.riderService.updateRiderCoordinates(id, dto);
  }
}
