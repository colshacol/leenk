import { handleRes } from '../utils'

export const findLink = (suffix: string) => {
  const request = new Request(`/api/find/${suffix}`, {
    headers: new Headers({'Content-Type': 'application/json'}),
    method: 'GET',
  })

  return fetch(request).then(handleRes)
}


