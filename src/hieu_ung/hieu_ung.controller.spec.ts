import { Test, TestingModule } from '@nestjs/testing';
import { HieuUngController } from './hieu_ung.controller';

describe('HieuUngController', () => {
  let controller: HieuUngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HieuUngController],
    }).compile();

    controller = module.get<HieuUngController>(HieuUngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
