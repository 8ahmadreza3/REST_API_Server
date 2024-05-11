const add = require('./add')
const remove = require('./delete')
const update = require('./update')
const list = require('./list')

module.exports = {
  add,
  delete: remove,
  update,
  list
}
