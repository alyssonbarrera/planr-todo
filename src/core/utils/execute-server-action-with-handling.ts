import { HTTPError } from 'ky'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { AppError } from './errors/app-error'

type ExecuteServerActionWithHandlingProps = {
  action: () => Promise<void>
  successMessage?: string | null
}

type ExecuteServerActionWithHandlingResult = {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}

/**
 * Executes a server action with error handling.
 *
 * @param {Object} params - The parameters for the function.
 * @param {() => Promise<void>} params.action - The server action to execute.
 * @param {string} [params.successMessage] - The success message to return if the action is successful.
 * @returns {Promise<ExecuteServerActionWithHandlingResult>} The result of the server action execution.
 *
 */
export async function executeServerActionWithHandling({
  action,
  successMessage,
}: ExecuteServerActionWithHandlingProps): Promise<ExecuteServerActionWithHandlingResult> {
  let response = {
    success: true,
    message: successMessage ?? null,
    errors: null,
  }

  try {
    await action()
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    if (error instanceof HTTPError) {
      const { message } = await error.response.json()

      response = {
        success: false,
        message,
        errors: null,
      }
    }

    if (error instanceof AppError) {
      const message = error.message

      response = {
        success: false,
        message,
        errors: null,
      }
    }

    if (!(error instanceof HTTPError || error instanceof AppError)) {
      console.error(error)

      response = {
        success: false,
        message: 'Unexpected error, try again in a few minutes.',
        errors: null,
      }
    }
  }

  return response
}
