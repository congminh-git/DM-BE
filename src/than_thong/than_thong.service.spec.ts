import { Test, TestingModule } from '@nestjs/testing';
import { ThanThongService } from './than_thong.service';

describe('ThanThongService', () => {
  let service: ThanThongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThanThongService],
    }).compile();

    service = module.get<ThanThongService>(ThanThongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
