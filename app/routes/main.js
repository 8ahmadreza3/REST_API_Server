const express = require('express')
const router = express.Router()
const mainControler = require('../controllers/main')

router.post('/', authController.confirm)
router.get('/', authController.authToken)
router.patch('/', authController.forgotPass)
router.delete('/')

module.exports = router
