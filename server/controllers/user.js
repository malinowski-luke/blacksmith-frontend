const UserModel = require('../models/user')
const moment = require('moment')
module.exports = {
  createUser: async (req, res) => {
    const { channel_id, channel_name, logo } = req.body
    let user

    // check body for required data
    if (!channel_name || !channel_id || !logo)
      return res
        .status(417)
        .send('Body Request Requires: channel_id, channel_name, logo')

    // check if user exists
    const userExists = await UserModel.findOne({ channel_id })
    if (userExists) return res.status(400).send('User Already Exists!')

    user = await UserModel.create({
      channel_id,
      channel_name,
      logo,
    })

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
    const { channel_id } = req.body

    if (!channel_id) return res.status(400).send('channel_id is Required!')

    await UserModel.findOneAndUpdate(
      channel_id,
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
