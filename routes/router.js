const express = require('express')
const router = express.Router()
const {apiSendMessageToChat, botSendMessageToChat} = require("../bot");

router.get('*', (req, res) => {
  res.render('index')
})
router.post('/send', async (req, res) => {
  const {body} = req
  let message = ''
  for (let key in body) {
    message += `${key}: ${body[key]}\n`
  }
  await apiSendMessageToChat(message)
  res.status(200)
  res.json({result: {message: body}})
})
router.post('/bot/send', async (req, res) => {
  const {body} = req
  let message = ''
  for (let key in body) {
    message += `${key}: ${body[key]}\n`
  }
  await botSendMessageToChat(message)
  res.status(200)
  res.json({result: {message: body}})
})
module.exports = router
