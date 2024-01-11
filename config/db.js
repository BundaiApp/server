import mongoose from 'mongoose'
mongoose.Promise = global.Promise

let local = false
let production = true

if (local) {
  mongoose.connect('mongodb://127.0.0.1:27017/bundai')
} else if (production) {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

mongoose.connection
  .once('open', () => console.log('MongoDb running'))
  .on('error', (err) => {
    console.error('MongoDb connection error:', err)
  })
