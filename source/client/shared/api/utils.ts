
export const handleRes = (res: {}) => {
  return res.status !== 200
    && console.error('Error in fetch().')
    || res.json()
}