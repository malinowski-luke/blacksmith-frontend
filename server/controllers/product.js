const scrape = require('../scripts/scrape')
const ProductModel = require('../models/product')
const logScrappedData = require('../scripts/logScrappedData')

module.exports = {
  getProducts: async (req, res) => {
    const { channel_id } = req.body

    if (!channel_id)
      return res.status(400).send('Twitch Channel ID is Required!')

    const userProducts = await ProductModel.find({ channel_id })

    return res.status(200).send(userProducts)
  },
  getProductInfo: async (req, res) => {
    let product, errorMsg

    const { url, channel_id } = req.body

    // check if item exists for user in collection
    const productExists = await ProductModel.findOne({ channel_id, url })
    if (productExists) return res.status(400).send('Duplicate Product!')

    const { status, data } = await scrape(link)

    if (status === 200 && !productExists) {
      product = await ProductModel.create({
        channel_id,
        url: data.url,
        title: data.title,
        price: data.price,
        img: data.img,
        has_prime: data.prime,
      })

      logScrappedData(data)
    } else errorMsg = data

    res.status(status === 200 ? 201 : status).send(product || errorMsg)
  },
}
