import { Test, TestingModule } from '@nestjs/testing';
import { TaskDetailController } from './task-detail.controller';
import { TaskDetailService } from './task-detail.service';

describe('TaskDetailController', () => {
  let controller: TaskDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskDetailController],
      providers: [TaskDetailService],
    }).compile();

    controller = module.get<TaskDetailController>(TaskDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
