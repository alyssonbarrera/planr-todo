import { getAuthenticatedUserRequest } from './get-authenticated-user-request'

describe('Get Authenticated User Request', () => {
  it('should be able to fetch the authenticated user', async () => {
    const response = await getAuthenticatedUserRequest({
      userId: '01JHWMZEZYDWFFKHETMVCNXVWR',
    })

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toEqual(
      expect.objectContaining({
        name: 'John Doe',
      })
    )
  })
})
