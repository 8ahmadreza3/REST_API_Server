const express = require('express')
const router = express.Router()
const uploadController = require('../controllers/upload')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post('/img', upload.single('avatar'), uploadController.uploadImg)

module.exports = router
