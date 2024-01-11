/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RaccoltaService } from './raccolta.service';
import { RaccoltaController } from './raccolta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Raccolta } from './entities/raccolta.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Raccolta
    ])
  ],
  controllers: [RaccoltaController],
  providers: [RaccoltaService],
})
export class RaccoltaModule {}
