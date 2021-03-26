module.exports = {
	name: 'kick',
	aliases: ['boot'],
	description: 'Kick server members',
	guildOnly: true,
	permissions: ['KICK_MEMBERS'],
	args: true,
	/**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} args
	 */
	execute: function (message, _client, args) {
		if (!message.mentions.users.size) return message.channel.send('No user mentioned');
		message.channel.send(`Kicked user ${message.mentions.members.first()} for reason: ${args.slice(1).join(' ') || 'Unspecified'}`);
	},
};
