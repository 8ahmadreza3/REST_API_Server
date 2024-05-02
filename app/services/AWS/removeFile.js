const { DeleteObjectCommand } = require('@aws-sdk/client-s3')
const client = require('./S3.js')

module.exports = async (awsKey) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const response = await client.send(new DeleteObjectCommand(params))
  return response
}
