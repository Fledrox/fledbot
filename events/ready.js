/**
 *
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
	console.log('Bot is up and ready.');
	client.user.setPresence({
		activity: {
			name: 'Some cool status',
		},
		status: 'idle',
	});
};
