'use server'

import type { UserDTO } from '@/modules/users/dtos/user-dto'
import { executeServerActionWithHandling } from '@/core/utils/execute-server-action-with-handling'
import { validateForm } from '@/core/utils/validate-form-data'
import { cookies } from 'next/headers'
import { getUsersRequest } from '../../http/get-users-request'
import { AppError } from '@/core/utils/errors/app-error'
import {
  loginFormSchema,
  type LoginFormSchema,
} from '../../validations/login-form-schema'

export async function loginFormAction(data: FormData) {
  const result = validateForm<LoginFormSchema>({
    schema: loginFormSchema,
    formData: data,
  })

  if (!result.data) {
    return result
  }

  const { email, password } = result.data

  async function executeLogin() {
    const users = await getUsersRequest()

    if (users.isLeft()) {
      throw users.value
    }

    const user = users.value.find(
      (user: UserDTO) => user.email === email && user.password === password
    )

    if (!user) {
      throw new AppError('Usuário não encontrado')
    }

    const cookieStore = await cookies()
    cookieStore.set('userId', user.id)
  }

  return await executeServerActionWithHandling({
    action: executeLogin,
  })
}
