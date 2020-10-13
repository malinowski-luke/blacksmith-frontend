const scrape = require('../scripts/scrape')



module.exports = {
  getProductInfo: async (req, res) => {
    const { link } = req.body
    const response = await scrape(link)
    res.status(response.status).send(response.data) 
  },
}  
