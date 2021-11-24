require('dotenv').config()
const {Telegraf} = require('telegraf')
const {BOT_TOKEN, CHAT_ID} = process.env
const bot = new Telegraf(BOT_TOKEN)
const sendMessageToChat = async (message) => {
  await bot.telegram.sendMessage(CHAT_ID, message)
}
module.exports = {sendMessageToChat}
