import { Test, TestingModule } from '@nestjs/testing';
import { TrangBiService } from './trang_bi.service';

describe('TrangBiService', () => {
  let service: TrangBiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrangBiService],
    }).compile();

    service = module.get<TrangBiService>(TrangBiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
