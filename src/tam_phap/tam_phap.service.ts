import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TamPhap } from './tam_phap.entity';

@Injectable()
export class TamPhapService {
  constructor(
    @InjectRepository(TamPhap)
    private tamPhapRepository: Repository<TamPhap>,
  ) {}

  createTamPhap(tamPhapData: Partial<TamPhap>): Promise<TamPhap> {
    const tamPhap = this.tamPhapRepository.create(tamPhapData);
    return this.tamPhapRepository.save(tamPhap);
  }

  findAll(): Promise<TamPhap[]> {
    return this.tamPhapRepository.find();
  }

  findById(id: number): Promise<TamPhap> {
    return this.tamPhapRepository.findOne({ where: { id } });
  }

  async updateTamPhap(id: number, tamPhapData: Partial<TamPhap>): Promise<TamPhap> {
    await this.tamPhapRepository.update(id, tamPhapData);
    return this.findById(id);
  }

  async deleteTamPhap(id: number): Promise<void> {
    await this.tamPhapRepository.delete(id);
  }
}
