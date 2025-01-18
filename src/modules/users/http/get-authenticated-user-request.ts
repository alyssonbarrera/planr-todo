import { api } from '@/infra/http/api-client'
import type { UserDTO } from '../dtos/user-dto'

type GetAuthenticatedUserRequestParams = {
  userId: string
}

export type GetAuthenticatedUserRequestResponse = UserDTO

export async function getAuthenticatedUserRequest({
  userId,
}: GetAuthenticatedUserRequestParams) {
  const response = await api.get<GetAuthenticatedUserRequestResponse>(
    `users/${userId}`
  )

  return response
}
