'use server'

import { validateForm } from '@/core/utils/validate-form-data'
import { createUserRequest } from '../../http/create-user-request'
import { executeServerActionWithHandling } from '@/core/utils/execute-server-action-with-handling'
import {
  registerFormSchema,
  type RegisterFormSchema,
} from '../../validations/register-form-schema'

export async function registerFormAction(data: FormData) {
  const result = validateForm<RegisterFormSchema>({
    schema: registerFormSchema,
    formData: data,
  })

  if (!result.data) {
    return result
  }

  const { name, email, password } = result.data

  async function executeRegister() {
    const response = await createUserRequest({
      name,
      email,
      password,
    })

    if (response.isLeft()) {
      throw response.value
    }
  }

  return await executeServerActionWithHandling({
    action: executeRegister,
  })
}
