import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThanThong } from './than_thong.entity';

@Injectable()
export class ThanThongService {
  constructor(
    @InjectRepository(ThanThong)
    private thanThongRepository: Repository<ThanThong>,
  ) {}

  createThanThong(thanThongData: Partial<ThanThong>): Promise<ThanThong> {
    const thanThong = this.thanThongRepository.create(thanThongData);
    return this.thanThongRepository.save(thanThong);
  }

  findAll(): Promise<ThanThong[]> {
    return this.thanThongRepository.find();
  }

  findById(id: number): Promise<ThanThong> {
    return this.thanThongRepository.findOne({ where: { id } });
  }

  async updateThanThong(id: number, thanThongData: Partial<ThanThong>): Promise<ThanThong> {
    await this.thanThongRepository.update(id, thanThongData);
    return this.findById(id);
  }

  async deleteThanThong(id: number): Promise<void> {
    await this.thanThongRepository.delete(id);
  }
}
