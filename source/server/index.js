const mongoose = require('mongoose')
const express = require('express')
const server = express()
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const linkServer = require('./routes/linkServer')
const appServer = require('./routes/appServer')

server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017')

server.use('/:suffix', linkServer)
server.use('/api', apiRouter)
server.use('*', appServer)

server.listen(4444, () => {
  console.log(`Listening: http://localhost:4444`)
})