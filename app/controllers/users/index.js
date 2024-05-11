const deleteUser = require('./deleteUser')
const listUsers = require('./listUsers')
const loginUser = require('./login')
const signUpUser = require('./signup')
const updateUser = require('./updateUser')
const forgotPass = require('./forgotPass')
const cards = require('./cards')

module.exports = {
  deleteUser,
  listUsers,
  loginUser,
  signUpUser,
  updateUser,
  forgotPass,
  cards
}
