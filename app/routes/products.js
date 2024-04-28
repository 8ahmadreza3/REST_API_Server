const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')
const authAdmin = require('../middlewares/authAdmin')
const authUser = require('../middlewares/authUser')

router.post('/', [authUser], booksController.addBook)
router.get('/', booksController.listBook)
router.get('/recommend', booksController.recommend)
router.get('/:address', booksController.infoBook)
router.delete('/:bookID', [authAdmin], booksController.deleteBook)
router.patch('/:bookID', [authAdmin], booksController.updateBook)

module.exports = router
