const tokenService = require('../services/tokenService')

module.exports = (req, res, next) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized',
      message_fa: 'شما مجاز نیستید'
    })
  }
  const token = tokenService.verify(req.headers.authorization)
  if (!token) {
    return res.status(401).send({
      success: false,
      message: 'your token is not valid',
      message_fa: 'توکن شما معتبر نیست'
    })
  }
  next()
}
