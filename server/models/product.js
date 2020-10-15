const mongoose = require('mongoose')
const moment = require('moment')

const productsSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  // check wat type is _id in mongodb
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number || null,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  hasPrime: {
    type: Boolean,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: () => moment.utc().toDate(),
  },
})

module.exports = mongoose.model('products', productsSchema)
