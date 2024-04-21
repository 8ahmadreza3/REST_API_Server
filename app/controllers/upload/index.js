const AWS = require('../../services/AWS')

module.exports.uploadImg = async (req, res, next) => {
  try {
    const { imgFile } = req.body
    if (!imgFile) {
      return res.send({
        success: false,
        message: 'The photo could not be uploaded'
      })
    }
    const { response, awsKey } = await AWS.upload(imgFile)
    if (response.$metadata.httpStatusCode !== 200) {
      return res.send({
        success: false,
        message: 'The photo could not be uploaded'
      })
    }
    res.send({
      success: true,
      message: 'Photo uploaded',
      data: {
        awsKey
      }
    })
  } catch (error) {
    next(error)
  }
}
