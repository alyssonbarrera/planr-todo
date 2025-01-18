import { api } from '@/infra/http/api-client'
import type { TaskDTO } from '../dtos/task.dto'

type DeleteTaskRequestParams = Pick<TaskDTO, 'id'>

export async function deleteTaskRequest({ id }: DeleteTaskRequestParams) {
  const response = await api.delete(`tasks/${id}`)

  return response
}
