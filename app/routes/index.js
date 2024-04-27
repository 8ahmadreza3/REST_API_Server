const main = require('./main')
const upload = require('./upload')
const users = require('./users')

module.exports = (app) => {
  app.use('/users', main)
  app.use('/upload', upload)
  app.use('/users', users)
}
