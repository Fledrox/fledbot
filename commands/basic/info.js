module.exports = {
	name: 'info',
	description: 'Informations of the bot.\nList of arguments: `version`, `creator`, `credits`, `token`.',
	args: true,
	/**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} client
	 * @param {string[]} args
	 */
	execute: function (message, client, args) {
			switch (args[0]) {
				case 'version':
					message.channel.send('Bot version: ' + client.config.version);
					break;
				case 'creator':
					message.channel.send('Bot created by ' + client.config.creator);
					break;
				case 'credits':
					message.channel.send(client.config.credits);
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
