import type { UserDTO } from '@/modules/users/dtos/user-dto'
import { api } from '@/infra/http/api-client'

export type GetUsersRequestResponse = UserDTO[]

export async function getUsersRequest() {
  const response = await api.get<GetUsersRequestResponse>('users')

  return response
}
