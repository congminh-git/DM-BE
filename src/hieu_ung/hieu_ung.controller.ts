import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { HieuUngService } from './hieu_ung.service';
import { HieuUng } from './hieu_ung.entity';

@Controller('hieu-ung')
export class HieuUngController {
  constructor(private readonly hieuUngService: HieuUngService) {}

  @Post('create')
  createHieuUng(@Body() hieuUngData: Partial<HieuUng>) {
    return this.hieuUngService.createHieuUng(hieuUngData);
  }

  @Get('all')
  findAllHieuUng() {
    return this.hieuUngService.findAll();
  }

  @Get(':id')
  findHieuUngById(@Param('id') id: number) {
    return this.hieuUngService.findById(id);
  }

  @Post('update/:id')
  updateHieuUng(@Param('id') id: number, @Body() hieuUngData: Partial<HieuUng>) {
    return this.hieuUngService.updateHieuUng(id, hieuUngData);
  }

  @Post('delete/:id')
  deleteHieuUng(@Param('id') id: number) {
    return this.hieuUngService.deleteHieuUng(id);
  }
}
