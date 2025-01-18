import { useFormState } from '@/core/hooks/use-form-state'
import { useRouter } from 'next/navigation'
import { loginFormAction } from './login-form.action'

export function useLoginForm() {
  const router = useRouter()

  const {
    isPending,
    clearFormError,
    formState: { errors, success, message },
    handleFormSubmit: handleLoginFormSubmit,
  } = useFormState(loginFormAction, {
    onSuccess: () => router.push('/dashboard'),
  })

  return {
    errors,
    success,
    message,
    isPending,
    clearFormError,
    handleLoginFormSubmit,
  }
}
