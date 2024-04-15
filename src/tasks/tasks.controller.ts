import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll(): TaskEntity[] {
    return this.taskService.getAll();
  }

  @Post()
  create(@Body() task: TaskEntity): TaskEntity {
    return this.taskService.create(task);
  }

  @Patch()
  update(@Body() task: TaskEntity): TaskEntity {
    return this.taskService.update(task);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
