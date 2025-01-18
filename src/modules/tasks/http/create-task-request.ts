import { api } from '@/infra/http/api-client'
import type { TaskDTO } from '../dtos/task.dto'

type CreateTaskRequestParams = Omit<TaskDTO, 'id'> & { id?: string }

export async function createTaskRequest({
  id,
  title,
  userId,
  completed,
  createdAt,
  description,
}: CreateTaskRequestParams) {
  const response = await api.post('tasks', {
    json: {
      id,
      title,
      userId,
      completed,
      createdAt,
      description,
    },
  })

  return response
}
