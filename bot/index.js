require('dotenv').config()
const {Telegraf} = require('telegraf')
const axios = require('axios')
//variables
const {BOT_TOKEN, CHAT_ID} = process.env
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=`
//bit initialization
const bot = new Telegraf(BOT_TOKEN)
//send message with bot
const botSendMessageToChat = async (message) => {
    return await bot.telegram.sendMessage(CHAT_ID, message)
}
//send message with api
const apiSendMessageToChat = async (message) => {
    try {
        return await axios.get(URL + message)
    } catch (e) {
        await botSendMessageToChat('error: something went wrong')
        throw new Error(e)
    }
}
module.exports = {botSendMessageToChat, apiSendMessageToChat}
