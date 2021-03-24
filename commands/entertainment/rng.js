const command = {
    name: 'rng',
    aliases: ['roll', 'dice'],
	description: "Returns a random integer from 0 to X",
    usage: "[X]",
    args: true,
    execute: function (message, client, args) {
        var X = parseInt(args[0])
        X = (X + 1)
        X = Math.round(Math.random() * X)
        message.channel.send(X);
    },
};

module.exports = command;
