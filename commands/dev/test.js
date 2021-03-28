module.exports = {

    //Command info
    name: 'test',
    aliases: ['poke', 'ch'],
    description: "Tests whether command handling works",
    usage: "",

    /** JSDOCS
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} _args
	 */

    //Function: a simple test if the command handler works.
    execute: function (message, _client, _args) {
        message.channel.send("Command handler works as intented.");
    },
};
