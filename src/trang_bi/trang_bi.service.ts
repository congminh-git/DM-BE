import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrangBi } from './trang_bi.entity';

@Injectable()
export class TrangBiService {
  constructor(
    @InjectRepository(TrangBi)
    private trangBiRepository: Repository<TrangBi>,
  ) {}

  createTrangBi(trangBiData: Partial<TrangBi>): Promise<TrangBi> {
    const trangBi = this.trangBiRepository.create(trangBiData);
    return this.trangBiRepository.save(trangBi);
  }

  findAll(): Promise<TrangBi[]> {
    return this.trangBiRepository.find();
  }

  findById(id: number): Promise<TrangBi> {
    return this.trangBiRepository.findOne({ where: { id } });
  }

  async updateTrangBi(id: number, trangBiData: Partial<TrangBi>): Promise<TrangBi> {
    await this.trangBiRepository.update(id, trangBiData);
    return this.findById(id);
  }

  async deleteTrangBi(id: number): Promise<void> {
    await this.trangBiRepository.delete(id);
  }
}
