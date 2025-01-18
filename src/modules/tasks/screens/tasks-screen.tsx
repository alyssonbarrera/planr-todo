import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/components/ui/card'
import { TaskList } from '@/modules/tasks/components/task-list'
import { TaskForm } from '@/modules/tasks/forms/task-form'
import { getTasksByUsersRequest } from '@/modules/tasks/http/get-tasks-by-user'
import { getAuthenticatedUserRequest } from '@/modules/users/http/get-authenticated-user-request'
import { cookies } from 'next/headers'

export async function TasksScreen() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value as string

  const [tasks, user] = await Promise.all([
    getTasksByUsersRequest({ userId }),
    getAuthenticatedUserRequest({ userId }),
  ])

  if (tasks.isLeft() || user.isLeft()) {
    return <div>Failed to fetch data</div>
  }

  return (
    <div className="grid gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo(a), {user.value.name}!</CardTitle>
          <CardDescription>
            Gerencie suas tarefas de forma simples e eficiente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TaskForm />
        </CardContent>
      </Card>

      <TaskList tasks={tasks.value} />
    </div>
  )
}
