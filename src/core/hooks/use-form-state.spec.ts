import { makeFormEvent } from '@/tests/factories/make-form-event'
import { act, renderHook } from '@testing-library/react'
import { useFormState } from './use-form-state'

describe('useFormState Hook', () => {
  const mockAction = vi.fn()
  const mockOnSuccess = vi.fn()
  const mockOnFail = vi.fn()

  it('should be able to initialize with default state', () => {
    const { result } = renderHook(() => useFormState(mockAction, {}))

    expect(result.current.formState).toEqual({
      success: false,
      message: null,
      errors: null,
    })
    expect(result.current.isPending).toBe(false)
  })

  it('should be able to initialize with custom state', () => {
    const initialState = {
      success: true,
      message: 'Test message',
      errors: null,
    }

    const { result } = renderHook(() =>
      useFormState(mockAction, { initialState })
    )

    expect(result.current.formState).toEqual(initialState)
  })

  it('should be able to handle successful form submission', async () => {
    const successResponse = {
      success: true,
      message: 'Success!',
      errors: null,
    }

    mockAction.mockResolvedValueOnce(successResponse)

    const { result } = renderHook(() =>
      useFormState(mockAction, { onSuccess: mockOnSuccess })
    )

    const formEvent = makeFormEvent()

    await act(async () => {
      await result.current.handleFormSubmit(formEvent)
    })

    expect(mockAction).toHaveBeenCalled()
    expect(mockOnSuccess).toHaveBeenCalledWith(successResponse)
    expect(result.current.formState).toEqual(successResponse)
  })

  it('should be able to handle failed form submission', async () => {
    const failResponse = {
      success: false,
      message: 'Error message',
      errors: null,
    }

    mockAction.mockResolvedValueOnce(failResponse)

    const { result } = renderHook(() =>
      useFormState(mockAction, { onFail: mockOnFail })
    )

    const formEvent = makeFormEvent()

    await act(async () => {
      await result.current.handleFormSubmit(formEvent)
    })

    expect(mockAction).toHaveBeenCalled()
    expect(mockOnFail).toHaveBeenCalledWith(failResponse)
    expect(result.current.formState).toEqual(failResponse)
  })

  it('should be able to clear errors for a specific field', () => {
    const initialState = {
      success: false,
      message: null,
      errors: {
        email: ['Invalid email'],
        password: ['Password too short'],
      },
    }

    const { result } = renderHook(() =>
      useFormState(mockAction, { initialState })
    )

    act(() => {
      result.current.clearFormError('email')
    })

    expect(result.current.formState.errors?.email).toEqual([])
    expect(result.current.formState.errors?.password).toEqual([
      'Password too short',
    ])
  })
})
