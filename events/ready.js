/**
 *
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
	console.log('Bot is up and ready.');
	client.user.setPresence({
		activity: {
			name: 'shoutouts to simpleflips',
		},
		status: 'online',
	});
};
