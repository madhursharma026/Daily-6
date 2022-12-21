import { Test, TestingModule } from '@nestjs/testing';
import { TaskDetailService } from './task-detail.service';

describe('TaskDetailService', () => {
  let service: TaskDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskDetailService],
    }).compile();

    service = module.get<TaskDetailService>(TaskDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
