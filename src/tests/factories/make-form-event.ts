import type { FormEvent } from 'react'

/**
 * Creates a mock form submit event for testing purposes.
 *
 * This function creates a new HTML form element and a submit event.
 * It then sets the `currentTarget` property of the event to the created form.
 *
 * @returns A mock form submit event.
 */
export function makeFormEvent() {
  const form = document.createElement('form')
  const formEvent = new Event('submit')
  Object.defineProperty(formEvent, 'currentTarget', { value: form })

  return formEvent as unknown as FormEvent<HTMLFormElement>
}
