'use client'

import { Alert, AlertDescription, AlertTitle } from '@/core/components/ui/alert'
import { Button } from '@/core/components/ui/button'
import { Input } from '@/core/components/ui/input'
import { Label } from '@/core/components/ui/label'
import { AlertTriangle } from 'lucide-react'
import { loginFormCoordinator } from './login-form.coordinator'

export function LoginForm() {
  const {
    errors,
    success,
    message,
    isPending,
    clearFormError,
    handleLoginFormSubmit,
  } = loginFormCoordinator()

  return (
    <form className="space-y-4" onSubmit={handleLoginFormSubmit}>
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
          placeholder="Password"
          required
          onChange={clearFormError.bind(null, 'password')}
        />
        {errors?.password && (
          <p className="text-destructive text-sm">{errors.password[0]}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        Entrar
      </Button>
    </form>
  )
}
