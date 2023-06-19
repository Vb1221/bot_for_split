require('dotenv').config();

const token = process.env.BOT_TOKEN;

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  splitStrWithDelay(messageText, chatId);
});

function splitStrWithDelay(messageText, chatId) {

  const msgs = messageText.split('\n');

  msgs.forEach((message) => {
    bot.sendMessage(chatId, message);
  });
  
}

console.log("work")
