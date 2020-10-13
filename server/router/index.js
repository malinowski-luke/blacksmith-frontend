const express = require('express')
const Router = express.Router()

const getProductInfo = require('../controllers/getProductInfo')

// routes
Router.get('/product',getProductInfo)

module.exports = Router 