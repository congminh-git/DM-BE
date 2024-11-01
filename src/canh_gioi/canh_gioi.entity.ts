import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('canh_gioi')
export class CanhGioi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ten_canh_gioi: string;

  @Column('int')
  min_level: number;

  @Column('int')
  max_level: number;

  @Column('text')
  mo_ta: string;
}