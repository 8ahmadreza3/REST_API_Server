const ProductsModel = require('../../models/booksModel')

module.exports = async (req, res, next) => {
  try {
    const products = await ProductsModel.find({ isRecommend: true })
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
