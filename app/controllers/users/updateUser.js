const UsersModel = require('../../models/usersModel')

module.exports = async (req, res, next) => {
  try {
    const { user } = req.data
    const { userName } = req.params
    if (user.userName !== userName && !user.isAdmin) {
      res.send({
        success: false,
        message: 'you are not authorized'
      })
    }
    const newUserName = req.body.userName.replaceAll(' ', '_')
    if (newUserName && newUserName !== userName) {
      const sameUserName = await UsersModel.findOne({ userName: newUserName })
      if (sameUserName) {
        res.send({
          success: false,
          message: 'This address is duplicate'
        })
      }
    }
    if (!userName) {
      return res.status(404).send({
        success: false,
        message: 'Invalid User'
      })
    }
    const { n, nModified } = await UsersModel.updateOne({ userName }, { ...req.body })
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
