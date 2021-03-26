module.exports = {
    name: 'rng',
    aliases: ['roll', 'dice'],
	description: "Returns a random integer from 0 to X",
    usage: "[X]",
    args: true,
    /**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} args
	 */
    execute: function (message, _client, args) {
        message.channel.send(Math.round(Math.random() * (parseInt(args[0]))));
    },
};
