const CardsModel = require('../../models/cardsModel')
const dateService = require('../../services/dateService')

module.exports = async (req, res, next) => {
  try {
    const rawCards = await CardsModel.find({})
    const cards = rawCards.map((card) => {
      card.createdAt = dateService.toPersianDate(card.createdAt)
      return card
    })
    res.send({
      success: true,
      message: 'Found successfully',
      data: {
        cards
      }
    })
  } catch (error) {
    next(error)
  }
}
