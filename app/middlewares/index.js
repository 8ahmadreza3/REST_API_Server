const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const express = require('express')

module.exports = (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(fileUpload({
    createParentPath: true,
    useTempFile: true
  }))
}
