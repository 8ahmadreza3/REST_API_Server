const { PutObjectCommand } = require('@aws-sdk/client-s3')
const client = require('./S3')
const { v4: uuidv4 } = require('uuid')

module.exports = async (fileContent) => {
  const awsKey = uuidv4()
  const params = {
    Body: fileContent,
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const response = await client.send(new PutObjectCommand(params))
  return { response, awsKey }
}
