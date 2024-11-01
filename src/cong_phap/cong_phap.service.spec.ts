import { Test, TestingModule } from '@nestjs/testing';
import { CongPhapService } from './cong_phap.service';

describe('CongPhapService', () => {
  let service: CongPhapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CongPhapService],
    }).compile();

    service = module.get<CongPhapService>(CongPhapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
