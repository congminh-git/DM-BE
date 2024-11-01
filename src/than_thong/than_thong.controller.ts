import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ThanThongService } from './than_thong.service';
import { ThanThong } from './than_thong.entity';

@Controller('than-thong')
export class ThanThongController {
  constructor(private readonly thanThongService: ThanThongService) {}

  @Post('create')
  createThanThong(@Body() thanThongData: Partial<ThanThong>) {
    return this.thanThongService.createThanThong(thanThongData);
  }

  @Get('all')
  findAllThanThong() {
    return this.thanThongService.findAll();
  }

  @Get(':id')
  findThanThongById(@Param('id') id: number) {
    return this.thanThongService.findById(id);
  }

  @Post('update/:id')
  updateThanThong(@Param('id') id: number, @Body() thanThongData: Partial<ThanThong>) {
    return this.thanThongService.updateThanThong(id, thanThongData);
  }

  @Post('delete/:id')
  deleteThanThong(@Param('id') id: number) {
    return this.thanThongService.deleteThanThong(id);
  }
}
