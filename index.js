require('dotenv').config();

const token = process.env.BOT_TOKEN;

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

async function splitStrWithDelay(msg) {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const msgs = messageText.split('\n');

  for (let i = 0; i < msgs.length; i++) {
    await bot.sendMessage(chatId, msgs[i]);
  }
}

bot.on('message', (msg) => {
  splitStrWithDelay(msg);
});

console.log("work")
