import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CanhGioiService } from './canh_gioi.service';
import { CanhGioi } from './canh_gioi.entity';

@Controller('canh-gioi')
export class CanhGioiController {
  constructor(private readonly canhGioiService: CanhGioiService) {}

  // Endpoint để thêm dữ liệu vào bảng CanhGioi
  @Post('create')
  createCanhGioi(@Body() canhGioiData: Partial<CanhGioi>) {
    return this.canhGioiService.createCanhGioi(canhGioiData);
  }

  // Endpoint để lấy tất cả dữ liệu từ bảng CanhGioi
  @Get('all')
  findAllCanhGioi() {
    return this.canhGioiService.findAll();
  }

  // Endpoint để lấy dữ liệu từ bảng CanhGioi theo ID
  @Get(':id')
  findCanhGioiById(@Param('id') id: number) {
    return this.canhGioiService.findById(id);
  }

  // Endpoint để cập nhật dữ liệu theo ID
  @Put(':id')
  updateCanhGioi(@Param('id') id: number, @Body() canhGioiData: Partial<CanhGioi>) {
    return this.canhGioiService.updateCanhGioi(id, canhGioiData);
  }

  // Endpoint để xóa dữ liệu theo ID
  @Delete(':id')
  deleteCanhGioi(@Param('id') id: number) {
    return this.canhGioiService.deleteCanhGioi(id);
  }
}
