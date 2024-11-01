import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { NhanVatService } from './nhan_vat.service';
import { NhanVat } from './nhan_vat.entity';

@Controller('nhan-vat')
export class NhanVatController {
  constructor(private readonly nhanVatService: NhanVatService) {}

  // Endpoint để thêm dữ liệu vào bảng NhanVat
  @Post('create')
  createNhanVat(@Body() nhanVatData: Partial<NhanVat>) {
    return this.nhanVatService.createNhanVat(nhanVatData);
  }

  // Endpoint để lấy tất cả dữ liệu từ bảng NhanVat
  @Get('all')
  findAllNhanVat() {
    return this.nhanVatService.findAll();
  }

  // Endpoint để lấy dữ liệu từ bảng NhanVat theo ID
  @Get(':id')
  findNhanVatById(@Param('id') id: number) {
    return this.nhanVatService.findById(id);
  }

  // Endpoint để cập nhật dữ liệu của một nhân vật theo ID
  @Patch(':id')
  updateNhanVat(@Param('id') id: number, @Body() nhanVatData: Partial<NhanVat>) {
    return this.nhanVatService.updateNhanVat(id, nhanVatData);
  }

  // Endpoint để xóa dữ liệu của một nhân vật theo ID
  @Delete(':id')
  deleteNhanVat(@Param('id') id: number) {
    return this.nhanVatService.deleteNhanVat(id);
  }
}
