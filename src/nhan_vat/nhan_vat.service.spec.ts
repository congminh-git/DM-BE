import { Test, TestingModule } from '@nestjs/testing';
import { NhanVatService } from './nhan_vat.service';

describe('NhanVatService', () => {
  let service: NhanVatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NhanVatService],
    }).compile();

    service = module.get<NhanVatService>(NhanVatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
