const mongoose = require('mongoose')

const cardsSchema = new mongoose.Schema({
  product: String,
  user: String,
  count: Number,
  createdAt: Date
})

const cardsModel = mongoose.model('Cards', cardsSchema)

module.exports = cardsModel
