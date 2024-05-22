const ReceiptsModel = require('../../models/receiptsModel')
const CardsModel = require('../../models/cardsModel')
const ProductModel = require('../../models/cardsModel')

module.exports = async (req, res, next) => {
  try {
    const { user } = req.data
    const { cards, payID } = req.body
    if (!user || !product) {
      res.send({
        success: false,
        message: 'Enter the information in full'
      })
    }
    const prevReceipt = await ReceiptsModel.findOne({ user, cards })
    if (prevReceipt.payID) {
      return res.send({
        success: false,
        message: 'receipt is payed'
      })
    } else if(prevReceipt){
      await ReceiptsModel.findOneAndUpdate(prevReceipt, { payID })
    } else {
      let price = 0
      let product
      const presentCards = await cards.map(async(preCard) => {
        const card = await CardsModel.findById(preCard._id)
        product = await ProductModel.findById(card.product)
        price += (card.count * product.price)
        return card
      })
      const newReceipt = new ReceiptsModel({
        user,
        payID,
        cards: presentCards,
        price
      })
      await newReceipt.save()
    }
    res.status(201).send({
      success: true,
      message: 'added'
    })
  } catch (error) {
    next(error)
  }
}
