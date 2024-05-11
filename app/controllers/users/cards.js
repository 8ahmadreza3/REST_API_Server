const CardsModel = require('../../models/cardsModel')
const dateService = require('../../services/dateService')

module.exports = async (req, res, next) => {
  try {
    const { user } = req.data
    const { id } = req.params
    if (!(user.isAdmin || id === user._id)) {
      return res.status(401).send({
        success: false,
        message: 'your token is not valid'
      })
    }
    const rawCards = await CardsModel.find({ user: id })
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
