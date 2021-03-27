//Requirements
const { Client, Collection } = require('discord.js');
const client = new Client();

client.commands = new Collection();
client.config = require('./config.json');
client.token = require('./token.json');

require(`./handlers/commands`).handle(client);
require(`./handlers/events`).handle(client);

//Login
client.login(client.token.token);