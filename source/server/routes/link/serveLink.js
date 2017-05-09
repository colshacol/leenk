const Link = require('../../data/Link')

const serveLink = (req, res) => {
  console.log('SERVE')
  Link.find({ suffix: req.params.suffix }, (err, link) => {
    if (!!err) return console.log(err)
    res.redirect(link[0].long)
  })
}

module.exports = serveLink