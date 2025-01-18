import { z } from 'zod'

export const taskFormSchema = z.object({
  id: z.string().optional(),
  completed: z.coerce.boolean(),
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  description: z
    .string()
    .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
})

export type TaskFormSchema = z.infer<typeof taskFormSchema>
