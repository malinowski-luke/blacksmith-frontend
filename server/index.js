require('dotenv').config({})
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 9000
const scrape = require('./scripts/scrape')

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  const { link } = req.body
  try {
    const data = await scrape(link)
    res.status(200).send(data)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.listen(PORT, () => console.log(`app running on port: ${PORT}`))
