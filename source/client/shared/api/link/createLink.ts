import { handleRes } from '../utils'

export const createLink = (url: string) => {
  const request = new Request('/api/create', {
    headers: new Headers({'Content-Type': 'application/json'}),
    method: 'PUT',
    body: JSON.stringify({
      url: url
    })
  })

  return fetch(request).then(handleRes)
}