const express = require('express')
const router = express.Router()
const cardsController = require('../controllers/cards')
const authUser = require('../middlewares/authUser')

router.post('/', cardsController.add)
router.get('/', cardsController.list)
router.delete('/:id', [authUser], cardsController.delete)
router.patch('/:id', [authUser], cardsController.update)

module.exports = router
