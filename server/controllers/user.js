const UserModel = require('../models/user')

module.exports = {
  createUser: async (req, res) => {
    let user
    const { channel_id, channel_name, logo } = req.body

    if (channel_name && channel_id && logo) {
      user = await UserModel.create({
        channel_id,
        channel_name,
        logo,
      })
    }
    if (!user) res.status(417).send({ errMsg: 'User was not created' })
    res.status(201).send(user)
  },
}
