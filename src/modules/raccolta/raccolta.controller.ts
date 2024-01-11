/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { RaccoltaService } from './raccolta.service';
import { CreateRaccoltaDto } from './dto/create-raccolta.dto';
import { UpdateRaccoltaDto } from './dto/update-raccolta.dto';
import { Raccolta } from './entities/raccolta.entity';
import { BaseController } from '../../templates/controller/base-controller';

@Controller('raccolta')
export class RaccoltaController extends BaseController<Raccolta, RaccoltaService, CreateRaccoltaDto, UpdateRaccoltaDto> {
  constructor(private readonly raccoltaService: RaccoltaService) {
    super(raccoltaService);
  }
}
