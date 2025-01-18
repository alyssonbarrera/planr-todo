import type { ZodSchema } from 'zod'

type ValidateFormResult<T> = {
  data?: T
  success: boolean
  message: string | null
  errors: Record<string, string[] | undefined> | null
}

type ValidateFormProps<T> = {
  formData: FormData
  schema: ZodSchema<T>
}

/**
 * Validates form data against a given schema.
 *
 * @template T - The type of the form data.
 * @param {ValidateFormProps<T>} params - The parameters for form validation.
 * @param {ZodSchema} params.schema - The schema to validate the form data against.
 * @param {FormData} params.formData - The form data to be validated.
 * @returns {ValidateFormResult<T>} The result of the form validation.
 * @property {boolean} success - Indicates if the validation was successful.
 * @property {Record<string, string[]> | null} errors - The validation errors, if any.
 * @property {string | null} message - An optional message.
 * @property {T | undefined} data - The validated data, if validation was successful.
 *
 * @example
 * const result = validateForm<FormSchema>({
 *    schema: formSchema,
 *    formData: formData,
 * })
 *
 * if (!result.data) {
 *    return result
 * }
 *
 * const { property } = result.data
 */
export function validateForm<T>({
  schema,
  formData,
}: ValidateFormProps<T>): ValidateFormResult<T> {
  const result = schema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      errors,
      message: null,
      success: false,
    }
  }

  return {
    errors: null,
    success: true,
    message: null,
    data: result.data,
  }
}
