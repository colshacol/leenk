const router = require('express').Router()
const Link = require('../data/Link')

const linkServer = (req, res, next) => {
  Link.find({ suffix: req.params.suffix }, (err, link) => {
    if (!!link[0]) res.redirect(link[0].long)
    else next()
  })
}

module.exports = linkServer