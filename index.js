import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const token = process.env.TOKEN;
import Telegraf from 'telegraf';

const messages = [];

const app = express()
const bot = new Telegraf.Telegraf(token)

app.get("/", (req, res) => {
    res.send(messages);
})


bot.start(ctx => {
    ctx.reply('Welcome, bro')
})

bot.on('text', ctx => {
    messages.push(ctx.update.message.text);
})

bot.launch()
app.listen(3000, () => console.log(`My server is running on port ${3000}`))