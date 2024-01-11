/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../../templates/service/base-service';

@Injectable()
export class CategorieService extends BaseService<Categorie, CreateCategorieDto, UpdateCategorieDto> {

  constructor(@InjectRepository(Categorie) protected readonly categorieRepository: Repository<Categorie>) {
    super(categorieRepository);
  }
}
