import { Result } from 'domain-functions'
import { json } from 'react-router-dom'

export const loaderResponseOrNotFound = <T extends Result<unknown>>(result: T, opts?: RequestInit) => {
  if (!result.success) {
    throw new Response('Not found', { status: 404, ...opts })
  }

  return json(result.data, { status: 200, ...opts }) as Response
}
