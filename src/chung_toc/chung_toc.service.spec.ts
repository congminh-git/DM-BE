import { Test, TestingModule } from '@nestjs/testing';
import { ChungTocService } from './chung_toc.service';

describe('ChungTocService', () => {
  let service: ChungTocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChungTocService],
    }).compile();

    service = module.get<ChungTocService>(ChungTocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
