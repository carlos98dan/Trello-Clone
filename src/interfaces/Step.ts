import type { Task } from '@/interfaces/Task'

export interface Step {
  title: string
  tasks: Array<Task>
}
