import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskDetailService } from './task-detail.service';
import { TaskDetail } from './entities/task-detail.entity';
import { TaskDetailController } from './task-detail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TaskDetail])],
  controllers: [TaskDetailController],
  providers: [TaskDetailService]
})
export class TaskDetailModule {}

