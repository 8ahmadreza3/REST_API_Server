module.exports = (app) => {
  app.use(notFound)
}

const notFound = (req, res, next) => {
  res.status(404).send({
    success: false,
    status: 404
  })
}
