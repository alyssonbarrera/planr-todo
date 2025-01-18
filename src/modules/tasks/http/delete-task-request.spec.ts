import { createTaskRequest } from './create-task-request'
import { deleteTaskRequest } from './delete-task-request'

describe('Delete Task Request', () => {
  it('should be able to delete a task', async () => {
    await createTaskRequest({
      id: '01JHWN3C6MVXSNK8K9TBPH4K6M',
      title: 'New Task',
      description: 'Task description',
      userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
      completed: false,
      createdAt: new Date().toISOString(),
    })

    const response = await deleteTaskRequest({
      id: '01JHWN3C6MVXSNK8K9TBPH4K6M',
    })

    expect(response.isRight()).toBeTruthy()
  })
})
