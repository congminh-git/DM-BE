import { Test, TestingModule } from '@nestjs/testing';
import { ChucViController } from './chuc_vi.controller';

describe('ChucViController', () => {
  let controller: ChucViController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChucViController],
    }).compile();

    controller = module.get<ChucViController>(ChucViController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
