/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { BaseController } from 'src/templates/controller/base-controller';
import { Categorie } from './entities/categorie.entity';

@Controller('categorie')
export class CategorieController extends BaseController<Categorie, CategorieService, CreateCategorieDto, UpdateCategorieDto> {
  constructor(private readonly categorieService: CategorieService) {
    super(categorieService);
  }
}
