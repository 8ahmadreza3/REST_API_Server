const tokenService = require('../services/tokenService')

module.exports = (req, res, next) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized'
    })
  }
  const token = tokenService.verify(req.headers.authorization)
  if (!token) {
    return res.status(401).send({
      success: false,
      message: 'your token is not valid'
    })
  }
  next()
}
