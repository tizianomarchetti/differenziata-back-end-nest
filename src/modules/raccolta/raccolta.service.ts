/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateRaccoltaDto } from './dto/create-raccolta.dto';
import { UpdateRaccoltaDto } from './dto/update-raccolta.dto';
import { Raccolta } from './entities/raccolta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../templates/service/base-service';

@Injectable()
export class RaccoltaService extends BaseService<Raccolta, CreateRaccoltaDto, UpdateRaccoltaDto> {

  constructor(@InjectRepository(Raccolta) protected readonly raccoltaRepository: Repository<Raccolta>) {
    super(raccoltaRepository);
  }

  async create(createRaccoltaDto: CreateRaccoltaDto) {
    const raccolta = this.raccoltaRepository.create(createRaccoltaDto);
    return await this.raccoltaRepository.save(raccolta);
  }

  findAll() {
    return super.findAll({
      relations: { categoria: true },
      select: { data: true, categoria: { descrizione: true } }
    });
  }

  findOne(id: number) {
    return super.findOne(id, {
      relations: { categoria: true },
      // commentato perché dava errore che non ho ancora capito
      // select: { data: true, categoria: { descrizione: true } },
      where: { id }
    });
  }
}
