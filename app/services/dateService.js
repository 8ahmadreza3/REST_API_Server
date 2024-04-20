const jm = require('jalali-moment')

module.exports.toPersianDate = (date) => {
  return jm(date).locale('fa').format()
}
