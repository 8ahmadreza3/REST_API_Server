const CardsModel = require('../../models/cardsModel')

module.exports = async (req, res, next) => {
  try {
    const { product, user } = req.body
    if (!user || !product) {
      res.send({
        success: false,
        message: 'Enter the information in full'
      })
    }
    const prevCard = await CardsModel.findOne({ user, product })
    if (prevCard) {
      const { nModefied } = await CardsModel.updateOne(prevCard, { count: prevCard.count + 1 })
      if (!nModefied) {
        return res.send({
          success: false,
          message: "Couldn't update card"
        })
      }
    } else {
      const newCard = new CardsModel({
        user,
        product,
        count: 1,
        date: new Date()
      })
      await newCard.save()
    }
    res.status(201).send({
      success: true,
      message: 'added'
    })
  } catch (error) {
    next(error)
  }
}
