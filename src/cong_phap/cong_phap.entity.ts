import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('cong_phap')
export class CongPhap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ten_cong_phap: string;

  @Column('int')
  sinh_luc_toi_da: number;

  @Column('int')
  linh_luc_toi_da: number;

  @Column('int')
  dame_vat_ly: number;

  @Column('int')
  dame_phep_thuat: number;

  @Column('int')
  phong_thu_vat_ly: number;

  @Column('int')
  phong_thu_phep_thuat: number;

  @Column('int')
  khang_hieu_ung: number;

  @Column('int')
  khanh_chi_mang: number;

  @Column('float')
  ti_le_chi_mang: number;

  @Column('int', { nullable: true })
  id_hieu_ung: number;
}