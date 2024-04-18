const express = require('express')
const app = express()

const Winston = require('winston')
require('./db')
require('./middlewares')(app)
require('./routes')(app)
require('./middlewares/exception')(app)
require('./middlewares/404')(app)

Winston.add(new Winston.transports.File({ filename: 'logFile.log' }))
process.on('uncaughtException', (ex) => {
  Winston.error(ex.message, ex)
})
process.on('unhandledRejection', (ex) => {
  Winston.error(ex.message, ex)
})
module.exports = (port) => {
  app.listen(port, () => {
    console.log(`app is running on port:${port}`)
  })
}
