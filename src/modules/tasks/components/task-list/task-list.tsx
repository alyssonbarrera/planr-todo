'use client'

import { Button } from '@/core/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/components/ui/card'
import { Checkbox } from '@/core/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/core/components/ui/dialog'
import { ScrollArea } from '@/core/components/ui/scroll-area'

import type { TaskDTO } from '@/modules/tasks/dtos/task.dto'
import { Trash } from 'lucide-react'
import { useState } from 'react'
import { deleteTaskAction, toggleTaskStatusAction } from './task-list.action'

interface TaskListProps {
  tasks: TaskDTO[]
}

export function TaskList({ tasks }: TaskListProps) {
  const [selectedTask, setSelectedTask] = useState<TaskDTO | null>(null)

  return (
    <div className="grid gap-4">
      {tasks.map(task => (
        <Card key={task.id}>
          <CardHeader className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={checked => {
                    toggleTaskStatusAction(task.id, checked as boolean)
                  }}
                />
                <div className="grid gap-1">
                  <CardTitle className="text-base">{task.title}</CardTitle>
                  <CardDescription>{task.description}</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedTask(task)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <title>Ver detalhes</title>
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                        <path d="M4 6h16" />
                      </svg>
                      <span className="sr-only">Ver detalhes</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedTask?.title}</DialogTitle>
                      <DialogDescription>
                        Criada em{' '}
                        {new Date(
                          selectedTask?.createdAt || ''
                        ).toLocaleDateString('pt-BR')}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                      {selectedTask?.description}
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
                <form
                  action={async () => {
                    await deleteTaskAction(task.id)
                  }}
                >
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Deletar tarefa</span>
                  </Button>
                </form>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}

      {tasks.length === 0 && (
        <Card>
          <CardContent className="p-4 text-center text-muted-foreground">
            Nenhuma tarefa encontrada
          </CardContent>
        </Card>
      )}
    </div>
  )
}
