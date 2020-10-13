const cheerio = require('cheerio')
const axios = require('axios')




module.exports = async (url)=>{
  let html, status


  const axiosConfig= { 
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
    }
  }
  try{
    const { data ,status:statusCode} = await axios.get(url,axiosConfig)
    if(statusCode!==404){
      html = data
      status = statusCode
    }
  } catch (err){
    const {status, statusText} = err.response
    console.error(status, statusText)
    return {status, data: statusText }
  }

  
  const productInformation = {}
  const $ = cheerio.load(html)
  
  productInformation.title = $('#title').text().trim()
  productInformation.price = $('#priceblock_ourprice').html().trim()||"Price Unavailable!"
  productInformation.img = $('#landingImage').attr('data-old-hires')
  
  const hasPrime = $('#priceBadging_feature_div').find('.a-icon-prime')
  productInformation.prime = hasPrime? true: false 
  
  return {status: status, data: productInformation}
}
