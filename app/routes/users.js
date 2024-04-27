const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const authAdmin = require('../middlewares/authAdmin')
const authUser = require('../middlewares/authUser')

router.get('/', [authAdmin], usersController.listUsers)
router.post('/login', usersController.loginUser)
router.post('/signup', usersController.signUpUser)
router.delete('/:userName', [authAdmin], usersController.deleteUser)
router.patch('/:userName', [authUser], usersController.updateUser)
router.patch('/forgot/:userAuth', usersController.forgotPass)

module.exports = router
