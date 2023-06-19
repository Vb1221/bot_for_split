require('dotenv').config();

const token = process.env.BOT_TOKEN; 

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

function splitStrWithDelay(msg) {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const msgs = messageText.split('\n');

  let i = 0;
  const sendMessageWithDelay = setInterval(() => {
    if (i >= msgs.length) {
      clearInterval(sendMessageWithDelay);
      return;
    }

    bot.sendMessage(chatId, msgs[i]);
    i++;
  }, 500);
}

bot.on('message', (msg) => {
  splitStrWithDelay(msg);
});
