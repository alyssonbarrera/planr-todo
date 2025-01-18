'use client'

import { Button } from '@/core/components/ui/button'
import { Input } from '@/core/components/ui/input'
import { Label } from '@/core/components/ui/label'
import { useRegisterForm } from './register-form.hook'
import { Alert, AlertDescription, AlertTitle } from '@/core/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

export function RegisterForm() {
  const {
    errors,
    success,
    message,
    isPending,
    clearFormError,
    handleRegisterFormSubmit,
  } = useRegisterForm()

  return (
    <form className="space-y-4" onSubmit={handleRegisterFormSubmit}>
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
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          onChange={clearFormError.bind(null, 'name')}
        />
        {errors?.name && (
          <p className="text-destructive text-sm">{errors.name[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
          required
          onChange={clearFormError.bind(null, 'email')}
        />
        {errors?.email && (
          <p className="text-destructive text-sm">{errors.email[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          onChange={clearFormError.bind(null, 'password')}
          placeholder="Password"
        />
        {errors?.password && (
          <p className="text-destructive text-sm">{errors.password[0]}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        Criar conta
      </Button>
    </form>
  )
}
