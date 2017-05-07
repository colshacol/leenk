const mongoose = require('mongoose')

const linkSchema = mongoose.Schema({
  long: String,
  short: String,
  dateAdded: Number,
  creator: Number,
})

module.exports = linkSchema