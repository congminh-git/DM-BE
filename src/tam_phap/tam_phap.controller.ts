import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TamPhapService } from './tam_phap.service';
import { TamPhap } from './tam_phap.entity';

@Controller('tam-phap')
export class TamPhapController {
  constructor(private readonly tamPhapService: TamPhapService) {}

  @Post('create')
  createTamPhap(@Body() tamPhapData: Partial<TamPhap>) {
    return this.tamPhapService.createTamPhap(tamPhapData);
  }

  @Get('all')
  findAllTamPhap() {
    return this.tamPhapService.findAll();
  }

  @Get(':id')
  findTamPhapById(@Param('id') id: number) {
    return this.tamPhapService.findById(id);
  }

  @Post('update/:id')
  updateTamPhap(@Param('id') id: number, @Body() tamPhapData: Partial<TamPhap>) {
    return this.tamPhapService.updateTamPhap(id, tamPhapData);
  }

  @Post('delete/:id')
  deleteTamPhap(@Param('id') id: number) {
    return this.tamPhapService.deleteTamPhap(id);
  }
}
