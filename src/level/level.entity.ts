import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('level')
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  so_level: number;

  @Column('int')
  gioi_han_linh_khi: number;
}
