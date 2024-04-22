const tokenService = require('../services/tokenService')
const UsersModel = require('../models/usersModel')

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized',
      message_fa: 'شما مجاز به ارسال درخواست نیستید'
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
  const userData = tokenService.decode(token)
  const user = await UsersModel.findOne(userData)
  if (!user || !user.isAdmin) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized',
      message_fa: 'شما مجاز به ارسال درخواست نیستید'
    })
  }
  next()
}
