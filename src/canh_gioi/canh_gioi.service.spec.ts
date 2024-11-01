import { Test, TestingModule } from '@nestjs/testing';
import { CanhGioiService } from './canh_gioi.service';

describe('CanhGioiService', () => {
  let service: CanhGioiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanhGioiService],
    }).compile();

    service = module.get<CanhGioiService>(CanhGioiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
