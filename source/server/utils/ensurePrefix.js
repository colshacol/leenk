
const httpRegEx = /^(https?\:\/\/)/

const ensurePrefix = (url) => {
  console.log('...>>>>', httpRegEx.test(url))
  if (httpRegEx.test(url)) { return url }
  return `http://${url}`
}

module.exports = ensurePrefix