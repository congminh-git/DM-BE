import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChungToc } from './chung_toc.entity';

@Injectable()
export class ChungTocService {
  constructor(
    @InjectRepository(ChungToc)
    private chungTocRepository: Repository<ChungToc>,
  ) {}

  createChungToc(chungTocData: Partial<ChungToc>): Promise<ChungToc> {
    const chungToc = this.chungTocRepository.create(chungTocData);
    return this.chungTocRepository.save(chungToc);
  }

  findAll(): Promise<ChungToc[]> {
    return this.chungTocRepository.find();
  }

  findById(id: number): Promise<ChungToc> {
    return this.chungTocRepository.findOne({ where: { id } });
  }

  async updateChungToc(id: number, chungTocData: Partial<ChungToc>): Promise<ChungToc> {
    await this.chungTocRepository.update(id, chungTocData);
    return this.findById(id);
  }

  async deleteChungToc(id: number): Promise<void> {
    await this.chungTocRepository.delete(id);
  }
}
