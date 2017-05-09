const router = require('express').Router()

const appServer = (req, res, next) => {
  console.log('Serving client entry point.')
  res.sendFile('index.html', { root: 'public'})
}

module.exports = appServer