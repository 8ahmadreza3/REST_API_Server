module.exports = (app) => {
  app.use(notFound)
}

const notFound = (req, res, next) => {
  res.status(404).send({
    success: false,
    status: 404,
    message: 'requested resource could not be found',
    message_fa: 'منبع درخواستی یافت نشد'
  })
}
