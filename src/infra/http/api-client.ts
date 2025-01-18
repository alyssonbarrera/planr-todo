import ky, { type Options } from 'ky'
import { handleAuthResponse } from './api-client.utils'
import { type Either, left, right } from '@/core/utils/either'
import { AppError } from '@/core/utils/errors/app-error'

const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    afterResponse: [handleAuthResponse],
  },
})

export type ApiResponse<T> = Either<AppError, T>

async function apiGet<T>(
  url: string,
  options?: Options
): Promise<ApiResponse<T>> {
  try {
    const response = await kyInstance.get(url, options).json<T>()
    return right(response)
  } catch (error: any) {
    return left(new AppError(error?.message))
  }
}

async function apiPost<T>(
  url: string,
  options: Options
): Promise<ApiResponse<T>> {
  try {
    const response = await kyInstance.post(url, options).json<T>()
    return right(response)
  } catch (error: any) {
    return left(new AppError(error?.message))
  }
}

async function apiPut<T>(
  url: string,
  options: Options
): Promise<ApiResponse<T>> {
  try {
    const response = await kyInstance.put(url, options).json<T>()
    return right(response)
  } catch (error: any) {
    return left(new AppError(error?.message))
  }
}

async function apiDelete<T>(
  url: string,
  options?: Options
): Promise<ApiResponse<T>> {
  try {
    const response = await kyInstance.delete(url, options).json<T>()
    return right(response)
  } catch (error: any) {
    return left(new AppError(error?.message))
  }
}

async function apiPatch<T>(
  url: string,
  options?: Options
): Promise<ApiResponse<T>> {
  try {
    const response = await kyInstance.patch(url, options).json<T>()
    return right(response)
  } catch (error: any) {
    return left(new AppError(error?.message))
  }
}

export const api = {
  get: apiGet,
  put: apiPut,
  post: apiPost,
  patch: apiPatch,
  delete: apiDelete,
}
