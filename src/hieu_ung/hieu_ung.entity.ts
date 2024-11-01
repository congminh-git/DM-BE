import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('hieu_ung')
export class HieuUng {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  ten_hieu_ung: string;

  @Column('text')
  mo_ta: string;
}