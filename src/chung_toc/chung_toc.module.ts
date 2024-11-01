import { Module } from '@nestjs/common';
import { ChungTocController } from './chung_toc.controller';
import { ChungTocService } from './chung_toc.service';

@Module({
  controllers: [ChungTocController],
  providers: [ChungTocService]
})
export class ChungTocModule {}
