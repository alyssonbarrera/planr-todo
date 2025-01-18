import { describe, expect, it } from 'vitest'
import { AppError } from './app-error'

describe('AppError Class', () => {
  it('should be able to create an instance of AppError with the given message', () => {
    const message = 'An error occurred'
    const error = new AppError(message)

    expect(error).toBeInstanceOf(AppError)
    expect(error.message).toBe(message)
  })

  it('should be able to have a message property', () => {
    const message = 'Another error occurred'
    const error = new AppError(message)

    expect(error).toHaveProperty('message')
    expect(error.message).toBe(message)
  })
})
