import { createTaskRequest } from './create-task-request'
import { toggleTaskStatusRequest } from './toggle-task-status-request'

describe('Toggle Task Status Request', () => {
  it('should be able to toggle task status', async () => {
    await createTaskRequest({
      id: '01JHWN3C6MVXSNK8K9TBPH4K6O',
      title: 'New Task',
      description: 'Task description',
      userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
      completed: false,
      createdAt: new Date().toISOString(),
    })

    const response = await toggleTaskStatusRequest({
      id: '01JHWN3C6MVXSNK8K9TBPH4K6O',
      completed: true,
    })

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toEqual(
      expect.objectContaining({
        completed: true,
      })
    )
  })
})
