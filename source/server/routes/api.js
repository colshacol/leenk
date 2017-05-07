const router = require('express').Router()

const routes = {
  ROOT: '/',
  CREATE: '/create',
  DELETE: '/delete',
  UPDATE: '/update',
}

router.get(routes.ROOT, (req, res) => {
  res.send('/api is what you get.')
})

router.get(routes.CREATE, (req, res) => {
  res.send('/create is creating a link.')
})

module.exports = router