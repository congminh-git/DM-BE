import { Test, TestingModule } from '@nestjs/testing';
import { ChungTocController } from './chung_toc.controller';

describe('ChungTocController', () => {
  let controller: ChungTocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChungTocController],
    }).compile();

    controller = module.get<ChungTocController>(ChungTocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
