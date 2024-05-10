const mongoose = require('mongoose')
const { MONGO_DB, MONGO_HOST, MONGO_PORT } = process.env

mongoose.connection.on('error', error => {
  console.log('mongodb connection failed', error.message)
})
const startMongoDB = () => {
  mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin&replicaSet=rs0&directConnection=true`)
    .then(() => {
      console.log('connected to mongodb')
    })
    .catch(() => {
      console.log('could not connect to mongodb')
    })
}

// for connect with password url should be like :
// mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}

module.exports = startMongoDB
