const Link = require('../../data/Link')
const generateSuffix = require('../../utils/generateSuffix')
const ensurePrefix = require('../../utils/ensurePrefix')

const createLink = (req, res) => {
  const url = ensurePrefix(req.body.url)
  const suffix = generateSuffix()
  const link = new Link({
    long: url,
    short: `localhost:4123/${suffix}`,
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


