import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/components/ui/card'
import { RegisterForm } from '@/modules/users/forms/register-form'
import Link from 'next/link'

export function RegisterScreen() {
  return (
    <div className="mx-auto flex h-svh flex-col items-center justify-center space-y-6 sm:w-[350px]">
      <Card>
        <CardHeader>
          <CardTitle>Criar conta</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <p className="mt-4 text-center text-muted-foreground text-sm">
            Já tem uma conta?{' '}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Faça login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
