import { api } from '@/infra/http/api-client'
import type { TaskDTO } from '../dtos/task.dto'

type ToggleTaskStatusRequestParams = Pick<TaskDTO, 'id' | 'completed'>

export async function toggleTaskStatusRequest({
  id,
  completed,
}: ToggleTaskStatusRequestParams) {
  const response = await api.patch(`tasks/${id}`, {
    json: {
      completed,
    },
  })

  return response
}
