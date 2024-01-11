import { Test, TestingModule } from '@nestjs/testing';
import { RaccoltaService } from './raccolta.service';

describe('RaccoltaService', () => {
  let service: RaccoltaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaccoltaService],
    }).compile();

    service = module.get<RaccoltaService>(RaccoltaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
