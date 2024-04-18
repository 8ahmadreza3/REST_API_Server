const main = require('./main')
module.exports = (app) => {
  app.use('/users', main)
}
