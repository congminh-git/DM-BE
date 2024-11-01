import { Test, TestingModule } from '@nestjs/testing';
import { CongPhapController } from './cong_phap.controller';

describe('CongPhapController', () => {
  let controller: CongPhapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CongPhapController],
    }).compile();

    controller = module.get<CongPhapController>(CongPhapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
