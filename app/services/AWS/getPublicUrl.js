module.exports = (awsKey) => {
  return process.env.BUCKET_URL + awsKey + '.png'
}
