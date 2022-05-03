import { Injectable } from '@nestjs/common';
import { TasksStatus, Task } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(title: string, description: string) {
    const tasks: Task = {
      id: uuid(),
      title,
      description,
      status: TasksStatus.OPEN,
    };

    this.tasks.push(tasks);
    return tasks;
  }
}
