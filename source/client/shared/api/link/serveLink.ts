import { handleRes } from '../utils'

export const serveLink = async (suffix: string) => {
  console.log('serveee?')
  const request = new Request(`/api/serve/${suffix}`, {
    headers: new Headers(),
    method: 'GET',
  })

  fetch(request).then(handleRes)
}


