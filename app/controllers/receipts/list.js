const ReceiptModel = require('../../models/receiptsModel')

module.exports = async (req, res, next) => {
  try {
    const receipts = await ReceiptModel.find({})
    res.send({
      success: true,
      message: 'Found successfully',
      data: {
        receipts
      }
    })
  } catch (error) {
    next(error)
  }
}
