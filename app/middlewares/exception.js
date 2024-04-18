const winston = require('winston')

module.exports = (app) => {
  app.use((error, req, res, next) => {
    winston.error(error.message, error)
    console.log(error)
    const status = error.status || 500
    res.send({
      success: false,
      status,
      message: error.message
    })
  })
}
