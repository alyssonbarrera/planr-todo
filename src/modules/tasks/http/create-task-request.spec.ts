import { createTaskRequest } from './create-task-request'

describe('Create Task Request', () => {
  it('should be able to create a new task', async () => {
    const response = await createTaskRequest({
      id: '01JHWN3C6MVXSNK8K9TBPH4K6M',
      title: 'New Task',
      description: 'Task description',
      userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
      completed: false,
      createdAt: new Date().toISOString(),
    })

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toEqual(
      expect.objectContaining({
        title: 'New Task',
        description: 'Task description',
        completed: false,
      })
    )
  })
})
