import { Module } from '@nestjs/common';
import { CanhGioiController } from './canh_gioi.controller';
import { CanhGioiService } from './canh_gioi.service';

@Module({
  controllers: [CanhGioiController],
  providers: [CanhGioiService]
})
export class CanhGioiModule {}
