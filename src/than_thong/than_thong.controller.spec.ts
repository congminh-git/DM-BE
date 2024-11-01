import { Test, TestingModule } from '@nestjs/testing';
import { ThanThongController } from './than_thong.controller';

describe('ThanThongController', () => {
  let controller: ThanThongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThanThongController],
    }).compile();

    controller = module.get<ThanThongController>(ThanThongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
