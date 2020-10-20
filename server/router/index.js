const express = require('express')
const Router = express.Router()

const Product = require('../controllers/product')
const User = require('../controllers/user')

// routes------------------------------------------
Router.route('/').get((req, res) => res.status(200).send('OK!'))

Router.route('/product').get(Product.getProducts)
Router.route('/product').post(Product.getProductInfo)

Router.route('/user').get(User.getUser)
Router.route('/user').post(User.createUser)
Router.route('/user/delete').post(User.markUserForDeletion)

module.exports = Router
