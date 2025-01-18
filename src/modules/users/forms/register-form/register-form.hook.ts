import { useFormState } from '@/core/hooks/use-form-state'
import { useRouter } from 'next/navigation'
import { registerFormAction } from './register-form.action'

export function useRegisterForm() {
  const router = useRouter()

  const {
    isPending,
    clearFormError,
    formState: { errors, success, message },
    handleFormSubmit: handleRegisterFormSubmit,
  } = useFormState(registerFormAction, {
    onSuccess: () => router.push('/dashboard'),
  })

  return {
    errors,
    success,
    message,
    isPending,
    clearFormError,
    handleRegisterFormSubmit,
  }
}
