const express = require('express')
const {lookup} = require('geoip-lite')
const router = express.Router()
const {apiSendMessageToChat, botSendMessageToChat} = require('../bot');

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
router.get('/bot/get-ip-info', async (req, res) => {
    const ip = req.socket.remoteAddress;
    console.log(ip)
    res.json({
        result: {
            ip,
            info: lookup(ip)
        }
    })
})

router.get('*', (req, res) => {
    res.render('index')
})
module.exports = router
