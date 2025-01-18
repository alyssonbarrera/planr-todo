/**
 * Represents a generic application error.
 */
export class AppError {
  message: string

  constructor(message: string) {
    this.message = message
  }
}
