import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TaskDetailModule } from './task-detail/task-detail.module';
import { TaskDetail } from './task-detail/entities/task-detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'daily6',
        entities:  [TaskDetail],
        synchronize: true,
        autoLoadEntities: true,
        };
      },
    }),
    TaskDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
