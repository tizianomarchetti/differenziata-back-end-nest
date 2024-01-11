/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategorieModule } from './modules/categorie/categorie.module';
import { join } from 'path';
import { RaccoltaModule } from './modules/raccolta/raccolta.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configservice: ConfigService) => ({
        type: "oracle",
        username: configservice.get('DB_USERNAME'),
        password: configservice.get('DB_PASSWORD'),
        connectString: configservice.get('DB_CONN_STRING'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: false,
        logging: true
      }),
      inject: [ConfigService]
    }),
    CategorieModule,
    RaccoltaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
