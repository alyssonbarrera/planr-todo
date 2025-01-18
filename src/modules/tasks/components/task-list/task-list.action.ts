'use server'

import { revalidatePath } from 'next/cache'
import { toggleTaskStatusRequest } from '../../http/toggle-task-status-request'
import { deleteTaskRequest } from '../../http/delete-task-request'

export async function deleteTaskAction(taskId: string) {
  const response = await deleteTaskRequest({
    id: taskId,
  })

  if (response.isLeft()) {
    throw response.value
  }

  revalidatePath('/dashboard')
}

export async function toggleTaskStatusAction(
  taskId: string,
  completed: boolean
) {
  const response = await toggleTaskStatusRequest({
    id: taskId,
    completed,
  })

  if (response.isLeft()) {
    throw response.value
  }

  revalidatePath('/dashboard')
}
