import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CongPhapService } from './cong_phap.service';
import { CongPhap } from './cong_phap.entity';

@Controller('cong-phap')
export class CongPhapController {
  constructor(private readonly congPhapService: CongPhapService) {}

  @Post('create')
  createCongPhap(@Body() congPhapData: Partial<CongPhap>) {
    return this.congPhapService.createCongPhap(congPhapData);
  }

  @Get('all')
  findAllCongPhap() {
    return this.congPhapService.findAll();
  }

  @Get(':id')
  findCongPhapById(@Param('id') id: number) {
    return this.congPhapService.findById(id);
  }

  @Post('update/:id')
  updateCongPhap(@Param('id') id: number, @Body() congPhapData: Partial<CongPhap>) {
    return this.congPhapService.updateCongPhap(id, congPhapData);
  }

  @Post('delete/:id')
  deleteCongPhap(@Param('id') id: number) {
    return this.congPhapService.deleteCongPhap(id);
  }
}
