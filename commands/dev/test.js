module.exports = {
    name: 'test',
    aliases: ['poke', 'ch'],
    description: "Tests whether command handling works",
    usage: "",
    permissions: ['KICK_MEMBERS', 'BAN_MEMBERS', 'SEND_MESSAGES'],
    /**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} _args
	 */
    execute: function (message, _client, _args) {
        message.channel.send("Command handler works as intented.");
    },
};
