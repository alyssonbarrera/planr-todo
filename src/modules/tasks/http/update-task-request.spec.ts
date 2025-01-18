import { updateTaskRequest } from './update-task-request'

describe('Update Task Request', () => {
  it('should be able to update a task', async () => {
    const response = await updateTaskRequest({
      title: 'Updated Task',
      description: 'Updated description',
      userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
      completed: false,
    })

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toEqual(
      expect.objectContaining({
        title: 'Updated Task',
        description: 'Updated description',
        completed: false,
      })
    )
  })
})
