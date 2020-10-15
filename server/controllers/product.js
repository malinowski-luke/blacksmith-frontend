const scrape = require('../scripts/scrape')
const logScrappedData = require('../scripts/logScrappedData')

module.exports = {
  getProductInfo: async (req, res) => {
    const { link } = req.body
    const { status, data } = await scrape(link)

    if (status !== 404) logScrappedData(data)

    res.status(status).send(data)
  },
}
