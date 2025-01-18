import { getUsersRequest } from './get-users-request'

describe('Get Users Request', () => {
  it('should be able to fetch users', async () => {
    const response = await getUsersRequest()

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'John Doe',
        }),
        expect.objectContaining({
          name: 'Jane Doe',
        }),
      ])
    )
  })
})
