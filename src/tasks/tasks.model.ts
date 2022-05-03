export interface Task {
  id: string;
  title: string;
  description: string;
  status: TasksStatus;
}

export enum TasksStatus {
  OPEN = 'OPEN',
  IN_PROGRES = 'IN_PROGRES',
  DONE = 'DONE',
}
