module.exports = {

	// Command info
	name: 'kick',
	aliases: ['boot'],
	description: 'Kick server members',
	guildOnly: true,
	permissions: ['KICK_MEMBERS'],
	args: true,

	/** JSDOCS
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} args
	 */

	// Execute function
	execute: function (message, _client, args) {
		// Returns if no one is mentionned
		if (!message.mentions.users.size) return message.channel.send('No user mentioned');
		// Sends "Kicked user <@user> for Reason: <reason / "unspecified">"
		message.channel.send(`Kicked user ${message.mentions.members.first()} for reason: ${args.slice(1).join(' ') || 'Unspecified'}`);
		// Finally mutes the user
		//COMMAND TO MUTE THE USER HERE
		//I WILL DO IT AT SOME POINT, I HOPE
	},
};
