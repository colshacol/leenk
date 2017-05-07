const express = require('express')
const server = express()
const apiRouter = require('./routes/api')

server.use(express.static('public'))

server.use('/api', apiRouter)

server.get('*', (req, res) => {
  console.log('Serving client entry point.')
  res.sendFile('index.html', { root: 'public'})
})

server.listen(4444, () => {
  console.log(`Listening: http://localhost:4444`)
})