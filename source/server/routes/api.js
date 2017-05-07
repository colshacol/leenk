const router = require('express').Router()
const createLink = require('./link/create')

const routes = {
  ROOT: '/',
  CREATE: '/create',
  DELETE: '/delete',
  UPDATE: '/update',
}

router.get(routes.ROOT, (req, res) => {
  res.send('/api is what you get.')
})

router.put(routes.CREATE, createLink)

module.exports = router