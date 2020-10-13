const cheerio = require('cheerio')
const axios = require('axios')

module.exports = async function(url) {
  try {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    return $('h1').text()
  } catch (err) {
    console.error(`error get method url: ${url}`)
    return null
  }
}
