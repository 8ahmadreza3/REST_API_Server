const tokenService = require('../services/tokenService')

module.exports = (req, res, next) => {
  if (!('authorization' in req.header)) {
    return res.status(401).send({
      success: false
    })
  }
  const token = tokenService.verify(req.header.authorization)
  if (!token) {
    return res.status(401).send({
      success: false
    })
  }
  next()
}
