const ProductsModel = require('../../models/productsModel')

module.exports = async (req, res, next) => {
  try {
    const { address } = req.params
    if (!address) {
      return res.status(404).send({
        success: false,
        message: 'Invalid address'
      })
    }
    const product = await ProductsModel.findOne({ address })
    if (!product) {
      return res.status(404).send({
        success: false,
        message: 'Invalid'
      })
    }
    res.send({
      success: true,
      message: 'product information found',
      data: {
        product
      }
    })
  } catch (error) {
    next(error)
  }
}
