import { Module } from '@nestjs/common';
import { HieuUngController } from './hieu_ung.controller';
import { HieuUngService } from './hieu_ung.service';

@Module({
  controllers: [HieuUngController],
  providers: [HieuUngService]
})
export class HieuUngModule {}
