const express = require('express')
const router = express.Router()
const cardsController = require('../controllers/cards')

router.post('/', cardsController.add)
router.get('/', cardsController.list)
router.delete('/:id', cardsController.delete)
router.patch('/:id', cardsController.update)

module.exports = router
