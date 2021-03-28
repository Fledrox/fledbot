/**
 *
 * @param {import('discord.js').Client} client
 */

// Sets Discord presence
module.exports = (client) => {
	console.log('Client has started. Hello World!');
	client.user.setPresence({
		activity: {
			name: 'Hacking NASA',
		},
		status: 'online',
	});
};
