const ProductsModel = require('../../models/productsModel')

module.exports = async (req, res, next) => {
  try {
    const { bookID } = req.params
    if (!bookID) {
      return res.status(404).send({
        success: false,
        message: 'Invalid'
      })
    }
    const book = await ProductsModel.findById(bookID)
    const newAddress = req.body.address.replaceAll(' ', '_')
    if (newAddress && newAddress !== book.address) {
      const sameAddress = await ProductsModel.findOne({ address: newAddress })
      if (sameAddress) {
        return res.send({
          success: false,
          message: 'This address is duplicate'
        })
      }
    }
    const { n, nModified } = await ProductsModel.updateOne({ _id: bookID }, { ...req.body })
    if (n === 0 || nModified === 0) {
      return res.status(404).send({
        success: true,
        message: 'Can not update'
      })
    }
    res.send({
      success: true,
      message: 'information has been updated'
    })
  } catch (error) {
    next(error)
  }
}
