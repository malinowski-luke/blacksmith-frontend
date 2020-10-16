const scrape = require('../scripts/scrape')
const ProductModel = require('../models/product')
const logScrappedData = require('../scripts/logScrappedData')
const product = require('../models/product')

module.exports = {
  getProductInfo: async (req, res) => {
    let product, errorMsg

    const { link } = req.body
    const { status, data } = await scrape(link)

    if (status === 200) {
      product = await ProductModel.create({
        channel_id: 120374120371,
        url: data.url,
        title: data.title,
        price: data.price,
        img: data.img,
        has_prime: data.prime,
      })

      logScrappedData(data)
    } else errorMsg = data

    res.status(status).send(product || errorMsg)
  },
}
