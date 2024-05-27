const ReceiptModel = require('../../models/receiptsModel')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params
    const receipt = await ReceiptModel.findById(id)
    res.send({
      success: true,
      message: 'Found successfully',
      data: {
        receipt
      }
    })
  } catch (error) {
    next(error)
  }
}
