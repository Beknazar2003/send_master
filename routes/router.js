const express = require('express')
const router = express.Router()
const fetch = require('fetch')
const { BOT_TOKEN, CHAT_ID } = require('../config.json')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/send', (req, res) => {
  const { header, text } = req.body

  const responseMsg = `\*\*${header}\*\*\n${text}`

  fetch.fetchUrl(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${responseMsg}`,
    () => {
      res.redirect('/done')
    }
  )
})

router.get('/done', (req, res) => {
  res.render('done')
})

module.exports = router
