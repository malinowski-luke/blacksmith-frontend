const UserModel = require('../models/user')
const moment = require('moment')
module.exports = {
  createUser: async (req, res) => {
    let user
    const { channel_id, channel_name, logo } = req.body

    // check if user exists
    const userExists = await UserModel.findOne({ channel_id, channel_id })
    if (userExists) return res.status(400).send('User Already Exists!')

    if (channel_name && channel_id && logo) {
      user = await UserModel.create({
        channel_id,
        channel_name,
        logo,
      })
    }
    // if (!user) res.status(417).send({ errMsg: 'User was not created' })
    res.status(201).send(user)
  },
  getUser: async (req, res) => {
    const { channel_id } = req.body

    if (!channel_id)
      return res.status(400).send('Twitch Channel ID is Required!')

    const user = await UserModel.findOne({ channel_id })

    if (!user) return res.status(404).send('User Not Found!')

    res.status(200).send(user.toJSON())
  },
  markUserForDeletion: async (req, res) => {
    const { _id } = req.body

    if (!_id) return res.status(400).send('_id is Required!')

    await UserModel.findByIdAndUpdate(
      _id,
      {
        deactivated: true,
        deactivated_date: moment.utc().toDate(),
      },
      (err) => {
        if (err) return err
      }
    )

    res.status(202).send('User Marked For Deletion!')
  },
}
