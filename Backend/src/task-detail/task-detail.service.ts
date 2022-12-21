const moment = require("moment")
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDetail } from './entities/task-detail.entity';

@Injectable()
export class TaskDetailService {
  constructor(@InjectRepository(TaskDetail) private taskRepository: Repository<TaskDetail>) { }

  getAllDataBySingleDate(date: string) {
    // let todayDate = moment().format("YYYY-MM-DD")
    let todayDate = moment(date, 'YYYY-MM-DD').toDate();
    return this.taskRepository.find({ where: { completedAt: todayDate } });
  }

  getAllDataByDate(): Promise<TaskDetail[]> {
    let todayDate = moment().format("YYYY-MM-DD")
    return this.taskRepository.find({ where: { completedAt: todayDate } });
  }

  findOne(todayDate: Date) {
    if (!todayDate) {
      return null;
    }
    return this.taskRepository.findOne({ where: { completedAt: todayDate } });
  }

  async updateTask1(task1: string) {
    let todayDate = moment().format("YYYY-MM-DD")
    const dataExists = await this.findOne(todayDate);
    if (!dataExists) {
      const addingData = this.taskRepository.create({ task1 });
      return this.taskRepository.save(addingData);
    }
    dataExists.task1 = task1
    return this.taskRepository.save(dataExists);
  }

  async updateTask2(task2: string) {
    let todayDate = moment().format("YYYY-MM-DD")
    const dataExists = await this.findOne(todayDate);
    if (!dataExists) {
      const addingData = this.taskRepository.create({ task2 });
      return this.taskRepository.save(addingData);
    }
    dataExists.task2 = task2
    return this.taskRepository.save(dataExists);
  }

  async updateTask3(task3: string) {
    let todayDate = moment().format("YYYY-MM-DD")
    const dataExists = await this.findOne(todayDate);
    if (!dataExists) {
      const addingData = this.taskRepository.create({ task3 });
      return this.taskRepository.save(addingData);
    }
    dataExists.task3 = task3
    return this.taskRepository.save(dataExists);
  }

  async updateTask4(task4: string) {
    let todayDate = moment().format("YYYY-MM-DD")
    const dataExists = await this.findOne(todayDate);
    if (!dataExists) {
      const addingData = this.taskRepository.create({ task4 });
      return this.taskRepository.save(addingData);
    }
    dataExists.task4 = task4
    return this.taskRepository.save(dataExists);
  }

  async updateTask5(task5: string) {
    let todayDate = moment().format("YYYY-MM-DD")
    const dataExists = await this.findOne(todayDate);
    if (!dataExists) {
      const addingData = this.taskRepository.create({ task5 });
      return this.taskRepository.save(addingData);
    }
    dataExists.task5 = task5
    return this.taskRepository.save(dataExists);
  }

  async updateTask6(task6: string) {
    let todayDate = moment().format("YYYY-MM-DD")
    const dataExists = await this.findOne(todayDate);
    if (!dataExists) {
      const addingData = this.taskRepository.create({ task6 });
      return this.taskRepository.save(addingData);
    }
    dataExists.task6 = task6
    return this.taskRepository.save(dataExists);
  }
}
