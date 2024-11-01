import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChucViService } from './chuc_vi.service';
import { ChucVi } from './chuc_vi.entity';

@Controller('chuc-vi')
export class ChucViController {
  constructor(private readonly chucViService: ChucViService) {}

  @Post('create')
  createChucVi(@Body() chucViData: Partial<ChucVi>) {
    return this.chucViService.createChucVi(chucViData);
  }

  @Get('all')
  findAllChucVi() {
    return this.chucViService.findAll();
  }

  @Get(':id')
  findChucViById(@Param('id') id: number) {
    return this.chucViService.findById(id);
  }

  @Post('update/:id')
  updateChucVi(@Param('id') id: number, @Body() chucViData: Partial<ChucVi>) {
    return this.chucViService.updateChucVi(id, chucViData);
  }

  @Post('delete/:id')
  deleteChucVi(@Param('id') id: number) {
    return this.chucViService.deleteChucVi(id);
  }
}
