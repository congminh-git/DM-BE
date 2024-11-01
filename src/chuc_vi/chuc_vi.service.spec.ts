import { Test, TestingModule } from '@nestjs/testing';
import { ChucViService } from './chuc_vi.service';

describe('ChucViService', () => {
  let service: ChucViService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChucViService],
    }).compile();

    service = module.get<ChucViService>(ChucViService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
