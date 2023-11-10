import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const token = process.env.TOKEN;
import Telegraf from 'telegraf';

const app = express()
const bot = new Telegraf.Telegraf(token)

bot.start(ctx => {
    ctx.reply('Welcome, bro')
})

bot.on('text', ctx => {
    ctx.reply('just text')
})

bot.launch()
app.listen(3000, () => console.log(`My server is running on port ${3000}`))