require('dotenv').config({})
const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./router/index')
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(Router)


app.listen(PORT, () => console.log(`app running on port: ${PORT}`))
