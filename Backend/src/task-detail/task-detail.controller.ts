import { TaskDetailService } from './task-detail.service';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';

@Controller('task-detail')
export class TaskDetailController {

  constructor(private readonly taskDetailService: TaskDetailService) { }

  @Get('/:date')
  getAllDataBySingleDate(@Param('date') date: string) {
    return this.taskDetailService.getAllDataBySingleDate(date);
  }

  @Get('/')
  getAllDataByDate() {
    return this.taskDetailService.getAllDataByDate();
  }

  @Post('/addTask1')
  addTask1(@Body() body: any) {
    return this.taskDetailService.updateTask1(body.task1);
  }

  @Post('/addTask2')
  addTask2(@Body() body: any) {
    return this.taskDetailService.updateTask2(body.task2);
  }

  @Post('/addTask3')
  addTask3(@Body() body: any) {
    return this.taskDetailService.updateTask3(body.task3);
  }

  @Post('/addTask4')
  addTask4(@Body() body: any) {
    return this.taskDetailService.updateTask4(body.task4);
  }

  @Post('/addTask5')
  addTask5(@Body() body: any) {
    return this.taskDetailService.updateTask5(body.task5);
  }

  @Post('/addTask6')
  addTask6(@Body() body: any) {
    return this.taskDetailService.updateTask6(body.task6);
  }
}

