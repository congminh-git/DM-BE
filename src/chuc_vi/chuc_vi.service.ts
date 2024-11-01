import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChucVi } from './chuc_vi.entity';

@Injectable()
export class ChucViService {
  constructor(
    @InjectRepository(ChucVi)
    private chucViRepository: Repository<ChucVi>,
  ) {}

  createChucVi(chucViData: Partial<ChucVi>): Promise<ChucVi> {
    const chucVi = this.chucViRepository.create(chucViData);
    return this.chucViRepository.save(chucVi);
  }

  findAll(): Promise<ChucVi[]> {
    return this.chucViRepository.find();
  }

  findById(id: number): Promise<ChucVi> {
    return this.chucViRepository.findOne({ where: { id } });
  }

  async updateChucVi(id: number, chucViData: Partial<ChucVi>): Promise<ChucVi> {
    await this.chucViRepository.update(id, chucViData);
    return this.findById(id);
  }

  async deleteChucVi(id: number): Promise<void> {
    await this.chucViRepository.delete(id);
  }
}
