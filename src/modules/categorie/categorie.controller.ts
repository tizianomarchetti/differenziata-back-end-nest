/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';
import { BaseController } from '../../templates/controller/base-controller';

@Controller('categorie')
export class CategorieController extends BaseController<Categorie, CategorieService, CreateCategorieDto, UpdateCategorieDto> {
  constructor(private readonly categorieService: CategorieService) {
    super(categorieService);
  }
}
