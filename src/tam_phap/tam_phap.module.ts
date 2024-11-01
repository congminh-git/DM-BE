import { Module } from '@nestjs/common';
import { TamPhapController } from './tam_phap.controller';
import { TamPhapService } from './tam_phap.service';

@Module({
  controllers: [TamPhapController],
  providers: [TamPhapService]
})
export class TamPhapModule {}
