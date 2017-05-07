const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('/api is what you get.')
})

router.get('/create', (req, res) => {
  res.send('/create is creating a link.')
})

module.exports = router