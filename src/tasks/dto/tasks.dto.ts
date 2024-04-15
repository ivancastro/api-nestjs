import { TaskStatus } from "../tasks.entity";

export class UpdateTaskDto {
  title: string;
  description: string;
  status: TaskStatus
}