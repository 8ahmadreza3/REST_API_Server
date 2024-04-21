const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  name: { type: String, minlength: 4 },
  userName: { type: String, unique: true, minlength: 4 },
  phone: { type: String, unique: true },
  img: { type: String, default: '' },
  isAdmin: { type: Boolean, default: false },
  password: String,
  awsKey: { type: String, default: '' }
})
const userModel = mongoose.model('User', usersSchema)

module.exports = userModel
