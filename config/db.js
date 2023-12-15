import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/bundai')

mongoose.connection
  .once('open', () => console.log('MongoDb running'))
  .on('error', (e) => {
    throw 'error'
  })
