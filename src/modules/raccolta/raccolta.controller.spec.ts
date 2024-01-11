import { Test, TestingModule } from '@nestjs/testing';
import { RaccoltaController } from './raccolta.controller';
import { RaccoltaService } from './raccolta.service';

describe('RaccoltaController', () => {
  let controller: RaccoltaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaccoltaController],
      providers: [RaccoltaService],
    }).compile();

    controller = module.get<RaccoltaController>(RaccoltaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
