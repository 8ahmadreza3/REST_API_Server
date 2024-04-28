const products = require('./products')
const upload = require('./upload')
const users = require('./users')

module.exports = (app) => {
  app.use('/products', products)
  app.use('/upload', upload)
  app.use('/users', users)
}
