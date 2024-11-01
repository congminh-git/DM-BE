import { Test, TestingModule } from '@nestjs/testing';
import { HieuUngService } from './hieu_ung.service';

describe('HieuUngService', () => {
  let service: HieuUngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HieuUngService],
    }).compile();

    service = module.get<HieuUngService>(HieuUngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
