const mongoose = require('mongoose')

const receiptSchema = new mongoose.Schema({
  user: String,
  cards: Array,
  price: { type: Number, default: 0},
  payID: { type: String, unique: true }
})
const receiptModel = mongoose.model('Receipt', receiptSchema)

module.exports = receiptModel
