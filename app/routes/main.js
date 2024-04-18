const express = require('express')
const router = express.Router()
const mainControler = require('../controllers/main')

router.post('/', mainControler.post)
router.get('/', mainControler.get)
router.patch('/', mainControler.update)
router.delete('/', mainControler.delete)

module.exports = router
