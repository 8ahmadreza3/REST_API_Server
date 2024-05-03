const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')
const authAdmin = require('../middlewares/authAdmin')
const authUser = require('../middlewares/authUser')

router.post('/', [authUser], productsController.add)
router.get('/', productsController.list)
router.get('/recommend', productsController.recommend)
router.get('/:address', productsController.info)
router.delete('/:address', [authAdmin], productsController.remove)
router.patch('/:address', [authAdmin], productsController.update)

module.exports = router
