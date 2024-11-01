import { Module } from '@nestjs/common';
import { ChucViController } from './chuc_vi.controller';
import { ChucViService } from './chuc_vi.service';

@Module({
  controllers: [ChucViController],
  providers: [ChucViService]
})
export class ChucViModule {}
