const BooksModel = require('../../models/productsModel')
const AWS = require('../../services/AWS')

module.exports = async (req, res, next) => {
  try {
    const { bookID } = req.params
    if (!bookID) {
      return res.status(404).send({
        success: false,
        message: 'Invalid',
      })
    }
    const book = await BooksModel.findByIdAndDelete(bookID)
    if (!book) {
      return res.send({
        success: false,
        message: 'not found',
      })
    }
    if (book.awsKey) {
      const remove = AWS.remove(book.awsKey)
      if (!remove.success) {
        return res.send(remove)
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
