import { Module } from '@nestjs/common';
import { ThanThongController } from './than_thong.controller';
import { ThanThongService } from './than_thong.service';

@Module({
  controllers: [ThanThongController],
  providers: [ThanThongService]
})
export class ThanThongModule {}
