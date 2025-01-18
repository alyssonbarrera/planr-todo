'use client'

import { Button } from '@/core/components/ui/button'
import { Input } from '@/core/components/ui/input'
import { Label } from '@/core/components/ui/label'
import { Textarea } from '@/core/components/ui/textarea'
import { useTaskForm } from './task-form.hook'

import { Alert, AlertDescription, AlertTitle } from '@/core/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

export function TaskForm() {
  const {
    errors,
    success,
    message,
    isPending,
    clearFormError,
    handleTaskFormSubmit,
  } = useTaskForm()

  return (
    <form className="space-y-4" onSubmit={handleTaskFormSubmit}>
      {!success && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-6" />
          <AlertTitle>Erro</AlertTitle>

          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          name="title"
          required
          onChange={clearFormError.bind(null, 'title')}
        />
        {errors?.title && (
          <p className="text-destructive text-sm">{errors.title[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          name="description"
          required
          onChange={clearFormError.bind(null, 'description')}
        />
        {errors?.description && (
          <p className="text-destructive text-sm">{errors.description[0]}</p>
        )}
      </div>

      <input type="hidden" name="completed" value="false" />
      <Button type="submit" disabled={isPending}>
        Criar tarefa
      </Button>
    </form>
  )
}
