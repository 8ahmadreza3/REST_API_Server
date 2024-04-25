const UsersModel = require('../../models/usersModel')
const AWS = require('../../services/AWS')

module.exports = async (req, res, next) => {
  try {
    const { userName } = req.params
    if (!userName) {
      return res.status(404).send({
        success: false,
        message: 'Invalid User'
      })
    }
    const user = await UsersModel.findOneAndDelete({ userName })
    if (user) {
      return res.send({
        success: false,
        message: 'user not found'
      })
    }
    if (user.awsKey) {
      const remove = AWS.remove(user.awsKey)
      if (!remove.success) {
        return res.send(remove)
      }
    }

    res.send({
      success: true,
      message: 'User deleted'
    })
  } catch (error) {
    next(error)
  }
}
