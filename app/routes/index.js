const products = require('./products')
const upload = require('./upload')
const users = require('./users')
const auth = require('./auth')

module.exports = (app) => {
  app.use('/products', products)
  app.use('/upload', upload)
  app.use('/users', users)
  app.use('/auth', auth)
}
