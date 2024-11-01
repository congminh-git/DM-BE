import { Test, TestingModule } from '@nestjs/testing';
import { TamPhapService } from './tam_phap.service';

describe('TamPhapService', () => {
  let service: TamPhapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TamPhapService],
    }).compile();

    service = module.get<TamPhapService>(TamPhapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
