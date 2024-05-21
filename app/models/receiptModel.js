const mongoose = require('mongoose')

const status = ['موفقیت آمیز', 'ناموفق']

const receiptSchema = new mongoose.Schema({
  status: { type: String, enum: status },
  userID: String,
  cards: Array,
  price: { type: Number, default: 0}
})
const receiptModel = mongoose.model('Receipt', receiptSchema)

module.exports = receiptModel
