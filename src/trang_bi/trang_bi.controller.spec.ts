import { Test, TestingModule } from '@nestjs/testing';
import { TrangBiController } from './trang_bi.controller';

describe('TrangBiController', () => {
  let controller: TrangBiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrangBiController],
    }).compile();

    controller = module.get<TrangBiController>(TrangBiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
