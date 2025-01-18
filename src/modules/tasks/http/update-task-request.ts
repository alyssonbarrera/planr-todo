import { api } from '@/infra/http/api-client'
import type { TaskDTO } from '../dtos/task.dto'

type UpdateTaskRequestParams = Omit<TaskDTO, 'id' | 'createdAt'>

export async function updateTaskRequest({
  title,
  userId,
  completed,
  description,
}: UpdateTaskRequestParams) {
  const response = await api.post('tasks', {
    json: {
      title,
      userId,
      completed,
      description,
    },
  })

  return response
}
