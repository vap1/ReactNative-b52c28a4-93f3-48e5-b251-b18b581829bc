
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TaskDetails {
  task: Task;
}

interface TaskResponse {
  success: boolean;
  errorMessage?: string;
}

export { Task, TaskDetails, TaskResponse };