const router = require('express').Router()
const createLink = require('./link/createLink')
const findLink = require('./link/findLink')
const serveLink = require('./link/serveLink')

const routes = {
  FIND_LINK: '/find/:suffix',
  CREATE_LINK: '/create',
  REMOVE_LINK: '/remove',
  UPDATE_LINK: '/update',
  SERVE_LINK: '/serve/:suffix',
}

router.get(routes.FIND_LINK, findLink)
router.get(routes.SERVE_LINK, serveLink)
router.put(routes.CREATE_LINK, createLink)

module.exports = router