const Link = require('../../data/Link')
const generateSuffix = require('../../utils/generateSuffix')

const createLink = (req, res) => {
  const suffix = generateSuffix()
  const link = new Link({
    long: req.body.url,
    short: `localhost:4444/${suffix}`,
    dateAdded: Date.now(),
    creator: 0,
    suffix,
  })

  link.save((err, link) => {
    if (!!err) return console.log(err)
    console.log('NEW LINK SAVED TO DB.', link._id)
    res.send(link)
  })
}

module.exports = createLink


