const Link = require('../../data/Link')

const findLink = (req, res) => {
  Link.find({ suffix: req.params.suffix }, (err, link) => {
    if (!!err) return console.log(err)
    res.send(link[0])
  })
}

module.exports = findLink