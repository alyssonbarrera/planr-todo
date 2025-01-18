import { z } from 'zod'
import { validateForm } from './validate-form-data'

describe('validateForm Function', () => {
  it('should be able to return success true and data when form data is valid', () => {
    const schema = z.object({
      name: z.string(),
      age: z.coerce.number(),
    })

    const formData = new FormData()
    formData.append('name', 'John Doe')
    formData.append('age', '30')

    const result = validateForm({ schema, formData })

    expect(result.message).toBeNull()
    expect(result.success).toBe(true)
    expect(result.errors).toBeNull()
    expect(result.data).toEqual({ name: 'John Doe', age: 30 })
  })

  it('should be able to return success false and errors when form data is invalid', () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    })

    const formData = new FormData()
    formData.append('name', 'John Doe')
    formData.append('age', 'invalid-age')

    const result = validateForm({ schema, formData })

    expect(result.message).toBeNull()
    expect(result.success).toBe(false)
    expect(result.data).toBeUndefined()
    expect(result.errors).toEqual({ age: ['Expected number, received string'] })
  })

  it('should be able to return success false and errors when required fields are missing', () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    })

    const formData = new FormData()
    formData.append('name', 'John Doe')

    const result = validateForm({ schema, formData })

    expect(result.message).toBeNull()
    expect(result.success).toBe(false)
    expect(result.data).toBeUndefined()
    expect(result.errors).toEqual({ age: ['Required'] })
  })
})
