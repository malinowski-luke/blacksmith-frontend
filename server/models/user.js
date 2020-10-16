const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  channel_id: {
    type: Number,
    required: true,
  },
  channel_name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  deactivated: {
    type: Boolean,
    default: false,
  },
  deactivated_date: {
    type: Date,
  },
})

module.exports = mongoose.model('users', usersSchema)
