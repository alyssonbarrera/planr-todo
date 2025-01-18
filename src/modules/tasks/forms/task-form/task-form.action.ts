'use server'

import { validateForm } from '@/core/utils/validate-form-data'
import { executeServerActionWithHandling } from '@/core/utils/execute-server-action-with-handling'
import {
  taskFormSchema,
  type TaskFormSchema,
} from '../../validations/task-form-schema'
import { createTaskRequest } from '../../http/create-task-request'
import { cookies } from 'next/headers'
import { updateTaskRequest } from '../../http/update-task-request'
import type { ApiResponse } from '@/infra/http/api-client'

export async function taskFormAction(data: FormData) {
  const result = validateForm<TaskFormSchema>({
    schema: taskFormSchema,
    formData: data,
  })

  if (!result.data) {
    return result
  }

  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value as string

  const { id, title, completed, description } = result.data
  const isEditing = !!id

  async function executeTaskForm() {
    let response: ApiResponse<unknown>

    if (isEditing) {
      response = await updateTaskRequest({
        title,
        userId,
        completed,
        description,
      })
    } else {
      response = await createTaskRequest({
        title,
        userId,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      })
    }

    if (response.isLeft()) {
      throw response.value
    }
  }

  return await executeServerActionWithHandling({
    action: executeTaskForm,
  })
}
