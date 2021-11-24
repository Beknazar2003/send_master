const express = require('express')
const router = express.Router()
const {sendMessageToChat} = require("../bot/bot");

router.get('/', (req, res) => {
  res.render('index')
})
router.post('/send', async (req, res) => {
  const {body} = req
  let message = ''
  for (let key in body) {
    message += `${key}: ${body[key]}\n`
  }
  await sendMessageToChat(message)
  res.render('done')
})
module.exports = router
