// Requirements
const { MessageEmbed } = require('discord.js');

module.exports = {

	//Command info
	name: 'avatar',
	aliases: ['icon', 'pfp', 'av'],
	description: "Shows your or a mentioned user's avatar.",
	usage: '<@user>',

	/** JSDOCS
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} client
	 */

	//Execute function
	execute: function (message, client) {
		message.channel.send(new MessageEmbed()
		// Sets the avatar of mentionned user as embed image
		// If no one is mentionned, will take message author's avatar
		.setImage((message.mentions.users.first() || message.author)
		.displayAvatarURL({ dynamic: true })).setColor(client.config.colour));
	},
};
