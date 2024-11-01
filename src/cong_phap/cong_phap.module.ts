import { Module } from '@nestjs/common';
import { CongPhapController } from './cong_phap.controller';
import { CongPhapService } from './cong_phap.service';

@Module({
  controllers: [CongPhapController],
  providers: [CongPhapService]
})
export class CongPhapModule {}
