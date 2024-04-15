import { Injectable } from '@nestjs/common';
import { TaskEntity, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid'
import { UpdateTaskDto } from './dto/tasks.dto';

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

  create(task: TaskEntity): TaskEntity {
    this.taskList.push({
      id: v4(),
      title: task.title,
      description: task.description,
      status: task.status,
    });

    return this.taskList.at(-1);
  }

  update(id: string, task: UpdateTaskDto): TaskEntity {
    const index = this.taskList.findIndex((t) => t.id === id);

    if (index != -1) {
      const newTask: TaskEntity = {
        id: id,
        title: task.title,
        description: task.description,
        status: task.status,
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
