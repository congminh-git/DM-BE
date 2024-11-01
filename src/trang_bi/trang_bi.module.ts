import { Module } from '@nestjs/common';
import { TrangBiController } from './trang_bi.controller';
import { TrangBiService } from './trang_bi.service';

@Module({
  controllers: [TrangBiController],
  providers: [TrangBiService]
})
export class TrangBiModule {}
