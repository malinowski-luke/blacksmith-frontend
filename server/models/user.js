const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({})

module.exports = mongoose.model('users', usersSchema)