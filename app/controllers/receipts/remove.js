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
    const prevCard = await ReceiptsModel.findById(id)
    if (prevCard.count === 1) {
      const { deletedCount } = await ReceiptsModel.deleteOne({ _id: id })
      if (!deletedCount) {
        res.send({
          success: false,
          message: 'cannot delete'
        })
      }
    } else {
      const { nModified } = await ReceiptsModel.updateOne(prevCard, { count: prevCard.count - 1 })
      if (!nModified) {
        res.send({
          success: false,
          message: 'cannot delete'
        })
      }
    }
    res.send({
      success: true,
      message: 'deleted'
    })
  } catch (error) {
    next(error)
  }
}
