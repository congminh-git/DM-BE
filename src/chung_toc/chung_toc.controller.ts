import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChungTocService } from './chung_toc.service';
import { ChungToc } from './chung_toc.entity';

@Controller('chung-toc')
export class ChungTocController {
  constructor(private readonly chungTocService: ChungTocService) {}

  @Post('create')
  createChungToc(@Body() chungTocData: Partial<ChungToc>) {
    return this.chungTocService.createChungToc(chungTocData);
  }

  @Get('all')
  findAllChungToc() {
    return this.chungTocService.findAll();
  }

  @Get(':id')
  findChungTocById(@Param('id') id: number) {
    return this.chungTocService.findById(id);
  }

  @Post('update/:id')
  updateChungToc(@Param('id') id: number, @Body() chungTocData: Partial<ChungToc>) {
    return this.chungTocService.updateChungToc(id, chungTocData);
  }

  @Post('delete/:id')
  deleteChungToc(@Param('id') id: number) {
    return this.chungTocService.deleteChungToc(id);
  }
}
