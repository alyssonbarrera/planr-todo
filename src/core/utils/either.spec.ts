import { describe, expect, it } from 'vitest'
import { type Either, Left, Right, left, right } from './either'

describe('Either', () => {
  describe('Left', () => {
    it('should be able to create an instance of Left with the given value', () => {
      const value = 'error'
      const result = new Left(value)
      expect(result.value).toBe(value)
      expect(result.isLeft()).toBe(true)
      expect(result.isRight()).toBe(false)
    })
  })

  describe('Right', () => {
    it('should be able to create an instance of Right with the given value', () => {
      const value = 'success'
      const result = new Right(value)
      expect(result.value).toBe(value)
      expect(result.isLeft()).toBe(false)
      expect(result.isRight()).toBe(true)
    })
  })

  describe('left', () => {
    it('should be able to create an instance of Left using the left function', () => {
      const value = 'error'
      const result: Either<string, string> = left(value)
      expect(result).toBeInstanceOf(Left)
      expect(result.value).toBe(value)
      expect(result.isLeft()).toBe(true)
      expect(result.isRight()).toBe(false)
    })
  })

  describe('right', () => {
    it('should be able to create an instance of Right using the right function', () => {
      const value = 'success'
      const result: Either<string, string> = right(value)
      expect(result).toBeInstanceOf(Right)
      expect(result.value).toBe(value)
      expect(result.isLeft()).toBe(false)
      expect(result.isRight()).toBe(true)
    })
  })
})
