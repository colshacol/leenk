const mongoose = require('mongoose')
const linkSchema = require('./schema')

const Link = mongoose.model('Link', linkSchema)

module.exports = Link