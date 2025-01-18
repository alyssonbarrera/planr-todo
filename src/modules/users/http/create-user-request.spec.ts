import { createUserRequest } from './create-user-request'

describe('Create User Request', () => {
  it('should be able to fetch users', async () => {
    const response = await createUserRequest({
      name: 'John Doe',
      password: '123456',
      email: 'johndoe@email.com',
    })

    expect(response.isRight()).toBeTruthy()
  })
})
