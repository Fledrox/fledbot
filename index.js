const { Client, Collection } = require('discord.js');

const client = new Client();

client.commands = new Collection();
client.config = require('./config.json');

require(`./handlers/commands`).handle(client);
require(`./handlers/events`).handle(client);

client.login(client.config.token);
