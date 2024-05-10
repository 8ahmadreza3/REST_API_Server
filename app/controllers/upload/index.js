const AWS = require('../../services/AWS')

module.exports.uploadImg = async (req, res, next) => {
  try {
    const imgFile = req.file
    if (!imgFile) {
      return res.send({
        success: false,
        message: 'The photo could not be uploaded'
      })
    }
    const { response, awsKey } = await AWS.upload(imgFile.buffer)
    if (response.$metadata.httpStatusCode !== 200) {
      return res.send({
        success: false,
        message: 'The photo could not be uploaded'
      })
    }
    const url = AWS.publicUrl(awsKey)
    res.send({
      success: true,
      message: 'Photo uploaded',
      data: {
        awsKey,
        img: url
      }
    })
  } catch (error) {
    next(error)
  }
}
