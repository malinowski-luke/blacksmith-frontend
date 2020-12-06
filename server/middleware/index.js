module.exports = {
  checkChannelID: (req, res, next) => {
    const channel_id = req.params.channel_id
    console.log(channel_id)
    if (!channel_id)
      return res.status(417).send('Twitch Channel ID is Required!')
    else next()
  },

  checkClientID: (req, res, next) => {
    const client_id = req.body.client_id

    if (!client_id)
      return res.status(417).send('Body Request Requires: client_id')
    else next()
  },
}
