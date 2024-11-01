import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('chung_toc')
export class ChungToc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  mo_ta: string;

  @Column({ length: 100 })
  ten_chung_toc: string;
}