import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/components/ui/card'
import { LoginForm } from '@/modules/users/forms/login-form'
import Link from 'next/link'

export function LoginScreen() {
  return (
    <div className="mx-auto flex h-svh flex-col items-center justify-center space-y-6 sm:w-[350px]">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Entre com seu email e senha para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <p className="mt-4 text-center text-muted-foreground text-sm">
            Não tem uma conta?{' '}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Registre-se
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
