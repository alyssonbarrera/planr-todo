import type { KyRequest, KyResponse, NormalizedOptions } from 'ky'

function isServer() {
  return typeof window === 'undefined'
}

export async function handleAuthResponse(
  _request: KyRequest,
  _options: NormalizedOptions,
  response: KyResponse
) {
  if (response.status !== 401) return

  const { message } = await response.json<{ message: string }>()

  if (isUnauthorized(response) && isTokenInvalid(message)) {
    await signOut()
  }
}

function isUnauthorized(response: KyResponse) {
  return response.status === 401
}

function isTokenInvalid(message: string) {
  const lowerCaseMessage = message.toLocaleLowerCase()

  const isMessageInvalid = lowerCaseMessage === 'token.invalid'
  const isMessageExpired = lowerCaseMessage === 'token.expired'

  return isMessageInvalid || isMessageExpired
}

async function signOut() {
  if (isServer()) {
    return redirectFromServerSide()
  }

  return redirectFromClientSide()
}

async function redirectFromServerSide() {
  const { redirect } = await import('next/navigation')
  redirect('/login')
}

async function redirectFromClientSide() {
  window.location.href = '/login'
}
