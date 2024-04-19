const bcrypt = require('bcrypt')

module.exports.hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10)
}

module.exports.comparePassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword)
}
