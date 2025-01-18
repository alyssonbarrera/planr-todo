'use client'

import { type FormEvent, useState, useTransition } from 'react'

export type FormState = {
  success: boolean
  message: string | null
  errors: Record<string, string[] | undefined> | null
}

export type UseFormStateOptionsProps = {
  onSuccess?: (params: FormState) => Promise<void> | void
  onFail?: (params: FormState) => Promise<void> | void
  initialState?: FormState
  shouldResetForm?: boolean
}

/**
 * Custom hook to manage form state and handle form submission.
 *
 * @param action - A function that takes FormData and returns a Promise of FormState.
 * @param options - An object containing optional callbacks and initial state.
 * @param options.onFail - Callback function to be executed when the form submission fails.
 * @param options.onSuccess - Callback function to be executed when the form submission succeeds.
 * @param options.initialState - Initial state of the form.
 *
 * @returns An object containing the form state, a boolean indicating if the form is pending,
 * a function to clear form errors, and a function to handle form submission.
 */
export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  options?: UseFormStateOptionsProps
) {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<FormState>(
    options?.initialState ?? {
      success: false,
      message: null,
      errors: null,
    }
  )

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      const result = await action(formData)

      if (result.success && options?.onSuccess) {
        await options?.onSuccess(result)
      }

      if (!result.success && !result.errors && options?.onFail) {
        await options?.onFail(result)
      }

      setFormState(result)

      result.success && options?.shouldResetForm && form.reset()
    })
  }

  const clearFormError = (field: string) => {
    if (formState.errors?.[field]?.length) {
      setFormState(prevState => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [field]: [],
        },
      }))
    }
  }

  return {
    formState,
    isPending,
    clearFormError,
    handleFormSubmit,
  }
}
