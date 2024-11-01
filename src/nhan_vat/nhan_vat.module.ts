import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NhanVat } from './nhan_vat.entity';
import { NhanVatService } from './nhan_vat.service';
import { NhanVatController } from './nhan_vat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NhanVat])],
  providers: [NhanVatService],
  controllers: [NhanVatController], // Đăng ký entity NhanVat
})
export class NhanVatModule {}
