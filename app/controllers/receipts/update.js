const ReceiptsModel = require('../../models/receiptsModel')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).send({
        success: false,
        message: 'Invalid'
      })
    }
    const { nModified } = await ReceiptsModel.updateOne({ _id: id }, ...req.body)
    if (!nModified) {
      res.send({
        success: false,
        message: 'cannot update'
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
