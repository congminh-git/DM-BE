import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NhanVat } from './nhan_vat.entity';

@Injectable()
export class NhanVatService {
  constructor(
    @InjectRepository(NhanVat)
    private nhanVatRepository: Repository<NhanVat>,
  ) {}

  // Phương thức để thêm dữ liệu vào bảng NhanVat
  createNhanVat(nhanVatData: Partial<NhanVat>): Promise<NhanVat> {
    const nhanVat = this.nhanVatRepository.create(nhanVatData);
    return this.nhanVatRepository.save(nhanVat);
  }

  // Phương thức để lấy tất cả dữ liệu
  findAll(): Promise<NhanVat[]> {
    return this.nhanVatRepository.find();
  }

  // Phương thức để lấy dữ liệu theo ID
  findById(id: number): Promise<NhanVat> {
    return this.nhanVatRepository.findOne({ where: { id } });
  }

  // Phương thức để cập nhật dữ liệu theo ID
  async updateNhanVat(id: number, nhanVatData: Partial<NhanVat>): Promise<NhanVat> {
    const nhanVat = await this.nhanVatRepository.findOne({ where: { id } });
    if (!nhanVat) {
      throw new NotFoundException(`Không tìm thấy nhân vật với id ${id}`);
    }
    Object.assign(nhanVat, nhanVatData);
    return this.nhanVatRepository.save(nhanVat);
  }

  // Phương thức để xóa dữ liệu theo ID
  async deleteNhanVat(id: number): Promise<void> {
    const result = await this.nhanVatRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Không tìm thấy nhân vật với id ${id}`);
    }
  }
}
