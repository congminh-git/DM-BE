import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelModule } from './level/level.module';
import { ChungTocModule } from './chung_toc/chung_toc.module';
import { ChucViModule } from './chuc_vi/chuc_vi.module';
import { TrangBiModule } from './trang_bi/trang_bi.module';
import { CongPhapModule } from './cong_phap/cong_phap.module';
import { TamPhapModule } from './tam_phap/tam_phap.module';
import { ThanThongModule } from './than_thong/than_thong.module';
import { HieuUngModule } from './hieu_ung/hieu_ung.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',                   // Loại cơ sở dữ liệu là MySQL
      host: 'localhost',                // Địa chỉ máy chủ của MySQL (trong Laragon là localhost)
      port: 3306,                       // Cổng mặc định của MySQL
      username: 'root',                 // Tên đăng nhập của MySQL, mặc định là 'root' trong Laragon
      password: '',                     // Mật khẩu, để trống nếu bạn không đặt mật khẩu cho MySQL
      database: 'dm_be',              // Tên cơ sở dữ liệu bạn muốn sử dụng
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Đường dẫn đến các entity sẽ được sử dụng
      synchronize: true,                // Đồng bộ tự động với cơ sở dữ liệu khi có thay đổi
    }),
    LevelModule,
    ChungTocModule,
    ChucViModule,
    TrangBiModule,
    CongPhapModule,
    TamPhapModule,
    ThanThongModule,
    HieuUngModule,
  ],
})
export class AppModule {}
