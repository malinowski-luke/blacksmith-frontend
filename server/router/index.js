const express = require('express')
const Router = express.Router()

const Product = require('../controllers/product')
const User = require('../controllers/user')

// routes------------------------------------------
Router.route('/').get((req, res) => res.status(200).send('OK!'))

Router.route('/product').get(Product.getProductInfo)

// Router.route('/auth/get/user').post(User.getUser)
Router.route('/user/create').post(User.createUser)

module.exports = Router
