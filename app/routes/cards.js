const express = require('express')
const router = express.Router()
const cardsController = require('../controllers/cards')

router.post('/', cardsController)
router.get('/', cardsController)
router.delete('/:id', cardsController)
router.patch('/:id', cardsController)

module.exports = router
