module.exports = {
	name: 'info',
	description: 'Informations of the bot.',
	args: true,
	/**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} args
	 */
	execute: function (message, _client, args) {
			switch (args[0]) {
				case 'version':
					message.channel.send('Bot version: ' + client.config.version);
					break;
				case 'creator':
					message.channel.send('Bot created by ' + client.config.creator);
					break;
				case 'credits':
					message.channel.send(config.credits);
					break;
				case 'token':
					message.channel.send('Bot token: Lol you thought');
					break;
				default:
					message.channel.send("I'm not sure this info exists.");
					break;
			}
	},
};