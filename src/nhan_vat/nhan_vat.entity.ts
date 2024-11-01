import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NhanVat {
  @PrimaryGeneratedColumn()
  id: number; // Cột id tự động tăng

  @Column({ length: 100 })
  ten: string; // Cột tên, với độ dài tối đa 100 ký tự

  @Column('text')
  mo_ta: string; // Cột mô tả dạng văn bản dài

  @Column({ length: 50 })
  chung_toc: string; // Cột chủng tộc, độ dài tối đa 50 ký tự

  @Column({ length: 50 })
  chuc_vi: string; // Cột chức vị, độ dài tối đa 50 ký tự

  @Column('int')
  level: number; // Cột level, kiểu số nguyên

  @Column('int')
  id_than_thong_1: number; // ID thần thông 1, kiểu số nguyên

  @Column('int')
  id_than_thong_2: number; // ID thần thông 2, kiểu số nguyên

  @Column('int')
  id_cong_phap_1: number; // ID công pháp 1, kiểu số nguyên

  @Column('int')
  id_cong_phap_2: number; // ID công pháp 2, kiểu số nguyên

  @Column('int')
  id_cong_phap_3: number; // ID công pháp 3, kiểu số nguyên

  @Column('int')
  id_cong_phap_4: number; // ID công pháp 4, kiểu số nguyên

  @Column({ length: 100 })
  ao_giap: string; // Áo giáp, độ dài tối đa 100 ký tự

  @Column({ length: 100 })
  mu_giap: string; // Mũ giáp, độ dài tối đa 100 ký tự

  @Column({ length: 100 })
  quan_giap: string; // Quần giáp, độ dài tối đa 100 ký tự

  @Column({ length: 100 })
  giay_giap: string; // Giày giáp, độ dài tối đa 100 ký tự

  @Column({ length: 100 })
  vu_khi: string; // Vũ khí, độ dài tối đa 100 ký tự

  @Column('int')
  id_tam_phap_1: number; // ID tâm pháp 1, kiểu số nguyên

  @Column('int')
  id_tam_phap_2: number; // ID tâm pháp 2, kiểu số nguyên

  @Column('int')
  sinh_luc_toi_da: number; // Sinh lực tối đa, kiểu số nguyên

  @Column('int')
  linh_luc_toi_da: number; // Linh lực tối đa, kiểu số nguyên

  @Column('int')
  tu_vi: number; // Tu vi, kiểu số nguyên

  @Column('int')
  dame_vat_ly: number; // Dame vật lý, kiểu số nguyên

  @Column('int')
  dame_phep_thuat: number; // Dame phép thuật, kiểu số nguyên

  @Column('int')
  phong_thu_vat_ly: number; // Phòng thủ vật lý, kiểu số nguyên

  @Column('int')
  phong_thu_phep_thuat: number; // Phòng thủ phép thuật, kiểu số nguyên

  @Column('float')
  khang_hieu_ung: number; // Kháng hiệu ứng, kiểu số thực

  @Column('float')
  khanh_chi_mang: number; // Kháng chí mạng, kiểu số thực

  @Column('float')
  ti_le_chi_mang: number; // Tỷ lệ chí mạng, kiểu số thực
}
