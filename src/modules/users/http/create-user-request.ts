import type { UserDTO } from '@/modules/users/dtos/user-dto'
import { api } from '@/infra/http/api-client'

type CreateUserRequestParams = Omit<UserDTO, 'id'>

export async function createUserRequest({
  name,
  email,
  password,
}: CreateUserRequestParams) {
  const response = await api.post('users', {
    json: {
      name,
      email,
      password,
    },
  })

  return response
}
