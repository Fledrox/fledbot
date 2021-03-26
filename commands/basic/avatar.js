const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp', 'av'],
	description: "Shows your or a mentioned user's avatar.",
	usage: '<@user>',
	/**
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} client
	 */
	execute: function (message, client) {
		message.channel.send(new MessageEmbed().setImage((message.mentions.users.first() || message.author).displayAvatarURL({ dynamic: true })).setColor(client.config.colour));
	},
};
