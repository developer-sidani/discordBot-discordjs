require("dotenv").config();
const { prefix } = process.env;

const kick = require('./kick');
const ban = require('./ban');
const clearchat = require('./clearchat')

module.exports = client => {
  client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix) || message.author.bot)
      return;
    switch (args[0]) {
      case 'ping':
      case 'test':
        message.reply('Winter Is Coming');
        break;
      case 'kick':
        kick(message);
        break;
      case 'ban':
        ban(message);
        break;
      case 'cc':
      case 'clearchat':
        clearchat(message);
        break;
      case 'help':
        message.reply('Under maintenance!!');
        break;
      default:
        message.reply(`Error! Unknown argument try ${prefix}help to show more options`);
    }
  });
}