import mongoose from 'mongoose'
mongoose.Promise = global.Promise

let local = false
let production = true

if (local) {
  console.log('local:', process.env.Local_Db)
  mongoose.connect(process.env.Local_Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} else if (production) {
  //console.log('production: ', process.env.MONGO_URI)
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
