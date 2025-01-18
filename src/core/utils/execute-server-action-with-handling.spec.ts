import { makeHTTPError } from '@/tests/factories/make-http-error'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { executeServerActionWithHandling } from './execute-server-action-with-handling'

vi.mock('next/dist/client/components/redirect-error')

describe('executeServerActionWithHandling Function', () => {
  it('should be able to return success true and the success message when action is successful', async () => {
    const action = vi.fn().mockResolvedValue(undefined)
    const successMessage = 'Action was successful'

    const result = await executeServerActionWithHandling({
      action,
      successMessage,
    })

    expect(result).toEqual({
      success: true,
      message: successMessage,
      errors: null,
    })
  })

  it('should be able to return success false and a generic error message when a non-HTTPError is thrown', async () => {
    const action = vi.fn().mockRejectedValue({
      message: 'Unexpected error',
    })

    const result = await executeServerActionWithHandling({ action })

    expect(result).toEqual({
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    })
  })

  it('should be able to return success false and a custom error message when a HTTPError is thrown', async () => {
    const httpError = makeHTTPError({
      requestOverride: {
        method: 'GET',
      },
      responseOverride: {
        status: 400,
        message: 'Custom error message',
      },
    })

    const action = vi.fn().mockRejectedValue(httpError)

    const result = await executeServerActionWithHandling({ action })

    expect(result).toEqual({
      success: false,
      message: 'Custom error message',
      errors: null,
    })
  })

  it('should be able to throw a redirect error when a redirect error is thrown', async () => {
    vi.mocked(isRedirectError).mockReturnValue(true)

    const action = vi.fn().mockRejectedValue({
      message: 'Redirect error',
    })

    const result = executeServerActionWithHandling({ action })

    await expect(result).rejects.toThrow('Redirect error')
  })
})
