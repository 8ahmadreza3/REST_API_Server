const UsersModel = require('../../models/usersModel')
const hashServices = require('../../services/hashService')
const aws = require('../../services/AWS')

module.exports = async (req, res, next) => {
  try {
    const { name, userName, awsKey, phone, password } = req.body
    if (!name || !userName || !phone || !password) {
      res.send({
        success: false,
        message: 'Enter the information in full'
      })
    }
    const same = await UsersModel.findOne({ $or: [{ phone }, { userName }] })
    if (same) {
      return res.send({
        success: false,
        message: 'try another phone number or username'
      })
    }

    const hashPassword = hashServices.hashPassword(password)
    const img = awsKey ? aws.publicUrl(awsKey) : ''
    const newUser = new UsersModel({
      name,
      userName: userName.replaceAll(' ', '_'),
      phone,
      isAdmin: false,
      password: hashPassword,
      img,
      awsKey: awsKey || ''
    })
    await newUser.save()
    res.status(201).send({
      success: true,
      message: 'new User added'
    })
  } catch (error) {
    next(error)
  }
}
