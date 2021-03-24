const Discord = require('discord.js');
const client = new Discord.Client();
const command = {
    name: 'rng',
    aliases: ['roll', 'dice'],
    execute: function (arguments, message) {

        message.channel.send("bigsex")

    },
};

module.exports = command;