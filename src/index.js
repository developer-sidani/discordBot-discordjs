require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
const message = require('./message');
const welcome = require('./welcome');
const userleft = require('./userleft');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//bot detecting messages
message(client);


//welcome message to new users
welcome(client);

//sends message if the user left
userleft(client);

client.login(process.env.DISCORD_BOT_TOKEN);