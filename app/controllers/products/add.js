const ProductsModel = require('../../models/productsModel')
const aws = require('../../services/AWS')

module.exports = async (req, res, next) => {
  try {
    const { name, author, awsKey, category, info, isRecommend } = req.body
    if (!name || !author) {
      res.send({
        success: false,
        message: 'Enter the information in full'
      })
    }
    const img = awsKey ? aws.publicUrl(awsKey) : ''
    const newProduct = new ProductsModel({
      name,
      author,
      category,
      info,
      isRecommend: isRecommend || false,
      img,
      awsKey: awsKey || ''
    })
    await newProduct.save()
    res.status(201).send({
      success: true,
      message: 'added',
    })
  } catch (error) {
    next(error)
  }
}
