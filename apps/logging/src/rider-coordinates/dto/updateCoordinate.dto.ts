import { PartialType } from '@nestjs/mapped-types';
import { CreateCoordinatesDto } from './createCoordinate.dto';

export class UpdateRiderCoordinatesDto extends PartialType(
  CreateCoordinatesDto,
) {}
