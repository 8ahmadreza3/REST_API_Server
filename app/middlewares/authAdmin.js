const tokenService = require('../services/tokenService')
const UsersModel = require('../models/usersModel')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized'
    })
  }
  const userData = tokenService.verify(authorization)
  if (!userData) {
    return res.status(401).send({
      success: false,
      message: 'your token is not valid'
    })
  }
  delete userData.iat
  const user = await UsersModel.findOne(userData)
  if (!user || !user.isAdmin) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized'
    })
  }
  req.data = {
    user
  }
  next()
}
