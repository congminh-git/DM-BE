import { Test, TestingModule } from '@nestjs/testing';
import { NhanVatController } from './nhan_vat.controller';

describe('NhanVatController', () => {
  let controller: NhanVatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NhanVatController],
    }).compile();

    controller = module.get<NhanVatController>(NhanVatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
