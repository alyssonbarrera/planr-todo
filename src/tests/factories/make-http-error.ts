import { HTTPError } from 'ky'

type MakeHTTPErrorProps = {
  responseOverride?: Partial<{
    status: number
    message: string
  }>
  requestOverride?: Partial<{
    method: string
  }>
}

export function makeHTTPError({
  responseOverride,
  requestOverride,
}: MakeHTTPErrorProps) {
  const response = new Response(
    JSON.stringify({
      message: responseOverride?.message ?? 'HTTP Error',
    }),
    {
      status: responseOverride?.status ?? 500,
    }
  )

  const request = new Request('http://localhost:3005', {
    method: requestOverride?.method ?? 'POST',
  })

  const error = new HTTPError(response, request, {
    retry: {},
    prefixUrl: '',
    onDownloadProgress: () => {},
    method: request.method,
  })

  return error
}
