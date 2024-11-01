import { Test, TestingModule } from '@nestjs/testing';
import { CanhGioiController } from './canh_gioi.controller';

describe('CanhGioiController', () => {
  let controller: CanhGioiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanhGioiController],
    }).compile();

    controller = module.get<CanhGioiController>(CanhGioiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
