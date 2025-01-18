import { useFormState } from '@/core/hooks/use-form-state'
import { taskFormAction } from './task-form.action'
import { useToast } from '@/core/hooks/use-toast'

export function useTaskForm() {
  const { toast } = useToast()

  const {
    isPending,
    clearFormError,
    formState: { errors, success, message },
    handleFormSubmit: handleTaskFormSubmit,
  } = useFormState(taskFormAction, {
    onSuccess: () => {
      toast({
        title: 'Sucesso!',
        description: 'Tarefa salva com sucesso!',
      })
    },
    shouldResetForm: true,
  })

  return {
    errors,
    success,
    message,
    isPending,
    clearFormError,
    handleTaskFormSubmit,
  }
}
