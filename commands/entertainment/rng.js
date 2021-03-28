module.exports = {
    //Command info
    name: 'rng',
    aliases: ['roll', 'dice'],
	description: "Returns a random integer from 0 to X",
    usage: "[X]",
    args: true,

    //JSDocs
    /**
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} _client
	 * @param {string[]} args
	 */

    //Execute function
    execute: function (message, _client, args) {
    //Checks if args are a number
        if (isNaN(args[0])) {message.channel.send(args.join(' ') + " is not a number");
    } else {
    //Gives a random percentage (from 0 to 1)
    //And multiplies it with given number
        message.channel.send(Math.round(Math.random() * (parseInt(args[0]))));
    }
    },
};
