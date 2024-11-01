import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HieuUng } from './hieu_ung.entity';

@Injectable()
export class HieuUngService {
  constructor(
    @InjectRepository(HieuUng)
    private hieuUngRepository: Repository<HieuUng>,
  ) {}

  createHieuUng(hieuUngData: Partial<HieuUng>): Promise<HieuUng> {
    const hieuUng = this.hieuUngRepository.create(hieuUngData);
    return this.hieuUngRepository.save(hieuUng);
  }

  findAll(): Promise<HieuUng[]> {
    return this.hieuUngRepository.find();
  }

  findById(id: number): Promise<HieuUng> {
    return this.hieuUngRepository.findOne({ where: { id } });
  }

  async updateHieuUng(id: number, hieuUngData: Partial<HieuUng>): Promise<HieuUng> {
    await this.hieuUngRepository.update(id, hieuUngData);
    return this.findById(id);
  }

  async deleteHieuUng(id: number): Promise<void> {
    await this.hieuUngRepository.delete(id);
  }
}
