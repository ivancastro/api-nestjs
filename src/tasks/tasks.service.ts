import { Injectable } from '@nestjs/common';
import { TaskEntity, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid'
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  private taskList: TaskEntity[] = [
    {
      id: v4(),
      title: 'tasks',
      description: 'tasks description',
      status: TaskStatus.PENDING,
    },
  ];

  create(task: CreateTaskDto): TaskEntity {
    this.taskList.push({
      id: v4(),
      title: task.title,
      description: task.description,
      status: TaskStatus.PENDING,
    });

    return this.taskList.at(-1);
  }

  update(id: string, task: UpdateTaskDto): TaskEntity {
    const index = this.taskList.findIndex((t) => t.id === id);

    if (index != -1) {
      const taskSaved: TaskEntity = { ...this.taskList[index] };

      const newTask: TaskEntity = {
        id: id,
        title: task?.title ?? taskSaved.title,
        description: task?.description ?? taskSaved.description,
        status: task?.status ?? taskSaved.status,
      };

      this.taskList[index] = { ...newTask };
    }

    return this.taskList[index];
  }

  delete(id: string): TaskEntity {
    const index = this.taskList.findIndex((t) => t.id === id);
    let taskDeleted: TaskEntity = null;

    if(index != -1) {
      [taskDeleted] = this.taskList.splice(index, 1);
    }

    return taskDeleted;
  }

  getAll(): TaskEntity[] {
    return this.taskList;
  }
}
