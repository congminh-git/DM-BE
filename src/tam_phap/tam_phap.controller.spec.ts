import { Test, TestingModule } from '@nestjs/testing';
import { TamPhapController } from './tam_phap.controller';

describe('TamPhapController', () => {
  let controller: TamPhapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TamPhapController],
    }).compile();

    controller = module.get<TamPhapController>(TamPhapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
