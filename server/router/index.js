const express = require('express')
const Router = express.Router()

const Product = require('../controllers/product')

// routes
Router.route('/product').get(Product.getProductInfo)

module.exports = Router 