const mongoose = require('mongoose')

const linkSchema = mongoose.Schema({
  long: String,
  short: String,
  dateAdded: Number,
  creator: Number,
  suffix: String,
})

module.exports = linkSchema