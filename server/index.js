require('dotenv').config({ path: './.env.local' })
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Router = require('./router/index')
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const runDeleteScript = require('./scripts/deleteUsers')

app.use(cors())
app.use(express.json())
app.use(Router)

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) console.error(err)
  }
)

runDeleteScript.job()

const db = mongoose.connection

app.listen(PORT, '0.0.0.0', () =>
  console.log(
    `app running on port: ${PORT}`,
    `\nconnected to mongo ${db.name} DB`
  )
)
