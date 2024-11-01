import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CanhGioi } from './canh_gioi.entity';

@Injectable()
export class CanhGioiService {
  constructor(
    @InjectRepository(CanhGioi)
    private canhGioiRepository: Repository<CanhGioi>,
  ) {}

  // Thêm dữ liệu vào bảng CanhGioi
  createCanhGioi(canhGioiData: Partial<CanhGioi>): Promise<CanhGioi> {
    const canhGioi = this.canhGioiRepository.create(canhGioiData);
    return this.canhGioiRepository.save(canhGioi);
  }

  // Lấy tất cả dữ liệu từ bảng CanhGioi
  findAll(): Promise<CanhGioi[]> {
    return this.canhGioiRepository.find();
  }

  // Lấy dữ liệu theo ID
  findById(id: number): Promise<CanhGioi> {
    return this.canhGioiRepository.findOne({ where: { id } });
  }

  // Cập nhật dữ liệu theo ID
  async updateCanhGioi(id: number, canhGioiData: Partial<CanhGioi>): Promise<CanhGioi> {
    await this.canhGioiRepository.update(id, canhGioiData);
    return this.findById(id);
  }

  // Xóa dữ liệu theo ID
  async deleteCanhGioi(id: number): Promise<void> {
    await this.canhGioiRepository.delete(id);
  }
}
