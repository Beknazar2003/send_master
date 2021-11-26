require('dotenv').config()
const {Telegraf} = require('telegraf')
//variables
const {BOT_TOKEN} = process.env
//bit initialization
const bot = new Telegraf(BOT_TOKEN)

bot.on('message', ctx => {
    console.log(ctx.update.message.chat)
    ctx.reply('your chat id ' + ctx.update.message.chat._id)
})

bot.launch().then(data => console.log(data))
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))