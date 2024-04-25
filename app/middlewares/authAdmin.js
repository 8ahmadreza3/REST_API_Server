const tokenService = require('../services/tokenService')
const UsersModel = require('../models/usersModel')

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
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
  const userData = tokenService.decode(token)
  const user = await UsersModel.findOne(userData)
  if (!user || !user.isAdmin) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized'
    })
  }
  next()
}
