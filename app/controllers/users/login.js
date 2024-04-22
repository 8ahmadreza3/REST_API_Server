const UserModel = require('../../models/usersModel')
const tokenService = require('../../services/tokenService')
const hashService = require('../../services/hashService')

module.exports = async (req, res, next) => {
  try {
    const { userAuth, password } = req.body
    const user = await UserModel.findOne({ $or: [{ userName: userAuth }, { phone: userAuth }] })
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'not found user'
      })
    }
    if (!hashService.comparePassword(password, user.password)) {
      return res.send({
        success: false,
        message: 'The password or username/number is incorrect'
      })
    }
    const token = tokenService.sign({ userName: user.userName, phone: user.phone, _id: user._id })
    res.send({
      success: true,
      message: 'Login was successful',
      data: {
        token,
        user
      }
    })
  } catch (error) {
    next(error)
  }
}
