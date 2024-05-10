const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  name: { type: String, minlength: 3 },
  price: Number,
  company: String,
  category: String,
  info: { type: String, default: '' },
  img: { type: String, default: '' },
  address: { type: String, default: '' },
  isRecommend: { type: Boolean, default: false },
  awsKey: { type: String, default: '' }
})

const ProductsModel = mongoose.model('Products', productsSchema)

module.exports = ProductsModel
