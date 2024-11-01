import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('chuc_vi')
export class ChucVi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  mo_ta: string;

  @Column({ length: 100 })
  ten_chuc_vi: string;
}