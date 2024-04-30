const ProductsModel = require('../../models/productsModel')

module.exports = async (req, res, next) => {
  try {
    const products = await ProductsModel.find({})
    res.send({
      success: true,
      message: 'Found successfully',
      data: {
        products
      }
    })
  } catch (error) {
    next(error)
  }
}
