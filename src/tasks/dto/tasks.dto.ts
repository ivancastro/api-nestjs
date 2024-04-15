import { TaskStatus } from "../tasks.entity";
import { IsNotEmpty, IsString, MaxLength, MinLength, IsIn, IsOptional } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  title: string;
  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  title: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  @IsOptional()
  status: TaskStatus
}