const ProductsModel = require('../../models/productsModel')
const AWS = require('../../services/AWS')

module.exports = async (req, res, next) => {
  try {
    const { address } = req.params
    if (!address) {
      return res.status(404).send({
        success: false,
        message: 'Invalid'
      })
    }
    const product = await ProductsModel.findOneAndDelete({ address })
    if (!product) {
      return res.send({
        success: false,
        message: 'not found'
      })
    }
    if (product.awsKey) {
      AWS.remove(product.awsKey)
    }
    res.send({
      success: true,
      message: 'deleted'
    })
  } catch (error) {
    next(error)
  }
}
