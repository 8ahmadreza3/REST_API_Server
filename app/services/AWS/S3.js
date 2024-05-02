const { S3Client } = require('@aws-sdk/client-s3')

const client = new S3Client({
  region: 'default',
  endpoint: process.env.ENDPOINT,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  }
})

module.exports = client
