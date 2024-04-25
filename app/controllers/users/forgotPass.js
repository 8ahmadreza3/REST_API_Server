const UserModel = require('../../models/usersModel')
const hashServices = require('../../services/hashService')

module.exports = async (req, res, next) => {
  try {
    const { userAuth } = req.params
    const { password } = req.body
    if (!userAuth) {
      return res.status(404).send({
        success: false,
        message: 'Invalid User'
      })
    }
    const hashPassword = hashServices.hashPassword(password)
    const { n, nModified } = await UserModel.updateOne({ $or: [{ userName: userAuth }, { phone: userAuth }] }, { password: hashPassword })
    if (n === 0 || nModified === 0) {
      return res.status(404).send({
        success: false,
        message: 'Can not update User'
      })
    }
    res.send({
      success: true,
      message: 'User information has been updated'
    })
  } catch (error) {
    next(error)
  }
}
