import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schema/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto/createCoordinate.dto';
import { ID } from 'apps/logging/common/types';
import { UpdateRiderCoordinatesDto } from './dto/updateCoordinate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private riderCoordinateModel: Model<RiderCoordinate>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async getRiderCoordinates(riderId: string) {
    const coordinates = await this.riderCoordinateModel.find({
      rider: riderId,
    });
    const pattern = { cmd: 'get-rider' };
    const payload = { id: riderId };
    const rider = await firstValueFrom(this.client.send(pattern, payload));
    return { coordinates, rider };
    //consumer
  }

  async saveRiderCoordinate(createCoordinatesDto: CreateCoordinatesDto) {
    return await this.riderCoordinateModel.create(createCoordinatesDto);
  }

  async updateRiderCoordinates(id: ID, updateDto: UpdateRiderCoordinatesDto) {
    return await this.riderCoordinateModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
  }
}
