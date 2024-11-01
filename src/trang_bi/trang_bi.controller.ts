import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TrangBiService } from './trang_bi.service';
import { TrangBi } from './trang_bi.entity';

@Controller('trang-bi')
export class TrangBiController {
  constructor(private readonly trangBiService: TrangBiService) {}

  @Post('create')
  createTrangBi(@Body() trangBiData: Partial<TrangBi>) {
    return this.trangBiService.createTrangBi(trangBiData);
  }

  @Get('all')
  findAllTrangBi() {
    return this.trangBiService.findAll();
  }

  @Get(':id')
  findTrangBiById(@Param('id') id: number) {
    return this.trangBiService.findById(id);
  }

  @Post('update/:id')
  updateTrangBi(@Param('id') id: number, @Body() trangBiData: Partial<TrangBi>) {
    return this.trangBiService.updateTrangBi(id, trangBiData);
  }

  @Post('delete/:id')
  deleteTrangBi(@Param('id') id: number) {
    return this.trangBiService.deleteTrangBi(id);
  }
}
