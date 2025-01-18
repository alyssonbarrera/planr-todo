import { api } from '@/infra/http/api-client'
import type { TaskDTO } from '../dtos/task.dto'

type GetTasksByUsersRequestParams = {
  userId: string
}

export type GetTasksByUsersRequestResponse = TaskDTO[]

export async function getTasksByUsersRequest({
  userId,
}: GetTasksByUsersRequestParams) {
  const response = await api.get<GetTasksByUsersRequestResponse>(
    `tasks?userId=${userId}`
  )

  return response
}
