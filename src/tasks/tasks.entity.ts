export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export class TaskEntity {
  id: string
  title: string
  description: string
  status: TaskStatus
}