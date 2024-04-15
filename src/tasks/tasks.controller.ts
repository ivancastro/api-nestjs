import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './tasks.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll(): TaskEntity[] {
    return this.taskService.getAll();
  }

  @Post()
  create(@Body() task: CreateTaskDto): TaskEntity {
    return this.taskService.create(task);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: UpdateTaskDto): TaskEntity {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
