const mongoose = require('mongoose')
const Link = require('../../data/Link/model')

const randomString = (length) => (
  Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1)
)

const createLink = (req, res) => {
  console.log(req.body)

  const link = new Link({
    long: req.body.url,
    short: 'localhost:4444/' + randomString(5),
    dateAdded: Date.now(),
    creator: 0,
  })

  link.save((err, link) => {
    if (!!err) return console.log(err)
    console.log('Success.')
    console.log(link)
    res.send({
      status: 200,
      link
    })
  })
}

module.exports = createLink


