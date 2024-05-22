const express = require('express')
const router = express.Router()
const receiptsController = require('../controllers/receipts')
const authAdmin = require('../middlewares/authAdmin')
const authUser = require('../middlewares/authUser')

router.post('/', [authUser], receiptsController.add)
router.get('/', [authAdmin], receiptsController.list)
router.get('/:id', receiptsController.info)
router.delete('/:id', [authAdmin], receiptsController.remove)
router.patch('/:id', [authAdmin], receiptsController.update)

module.exports = router
