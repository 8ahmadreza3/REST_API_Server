const main = require('./main')
const upload = require('./upload')

module.exports = (app) => {
  app.use('/users', main)
  app.use('upload', )
}
