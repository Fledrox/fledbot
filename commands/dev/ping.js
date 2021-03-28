module.exports = {

	// Command Info
	name: 'ping',
	aliases: ['latency'],
    description: "Computes API and RTT latency.",
   	usage: "",

	/** JSDOCS
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} client
	 * @param {string[]} _args
	 */
	
	// Function
	execute: function (message, client, _args) {
		// Creates message and checks how much time it took based on the author's message
		message.channel.send(':outbox_tray: Pinging... ').then(async (sentMessage) => {

			// Edits message to let the user know the latency
			await sentMessage.edit([
                ':inbox_tray: Pong!',
                `↩️ RTT: ${((sentMessage.editedAt || sentMessage.createdAt)) - ((message.editedAt || message.createdAt))}ms`, 
				// This is the API however
                `:heart: Latency: ${Math.round(client.ws.ping)}ms`]);
		});
	},
};
