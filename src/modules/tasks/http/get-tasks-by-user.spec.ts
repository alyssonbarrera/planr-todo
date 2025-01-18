import { getTasksByUsersRequest } from './get-tasks-by-user'

describe('Get Tasks By User Request', () => {
  it('should be able to fetch tasks by user id', async () => {
    const response = await getTasksByUsersRequest({
      userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
    })

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Task 1',
          userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
        }),
      ])
    )
  })
})
