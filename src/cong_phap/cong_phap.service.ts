import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CongPhap } from './cong_phap.entity';

@Injectable()
export class CongPhapService {
  constructor(
    @InjectRepository(CongPhap)
    private congPhapRepository: Repository<CongPhap>,
  ) {}

  createCongPhap(congPhapData: Partial<CongPhap>): Promise<CongPhap> {
    const congPhap = this.congPhapRepository.create(congPhapData);
    return this.congPhapRepository.save(congPhap);
  }

  findAll(): Promise<CongPhap[]> {
    return this.congPhapRepository.find();
  }

  findById(id: number): Promise<CongPhap> {
    return this.congPhapRepository.findOne({ where: { id } });
  }

  async updateCongPhap(id: number, congPhapData: Partial<CongPhap>): Promise<CongPhap> {
    await this.congPhapRepository.update(id, congPhapData);
    return this.findById(id);
  }

  async deleteCongPhap(id: number): Promise<void> {
    await this.congPhapRepository.delete(id);
  }
}
