module.exports = {
	name: 'ping',
	aliases: ['latency'],
    	description: "Computes API and RTT latency.",
   	usage: "",
	/**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} client
	 * @param {string[]} _args
	 */
	execute: function (message, client, _args) {
		message.channel.send(':outbox_tray: Pinging... ').then(async (sentMessage) => {
			await sentMessage.edit([
                ':inbox_tray: Pong!',
                `↩️ RTT: ${((sentMessage.editedAt || sentMessage.createdAt)) - ((message.editedAt || message.createdAt))}ms`, 
                `:heart: Latency: ${Math.round(client.ws.ping)}ms`]);
		});
	},
};
