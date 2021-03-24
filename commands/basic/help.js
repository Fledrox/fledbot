const config = require("../../config.json");

module.exports = {
    name: 'help',
	aliases: ['command'],
	description: "Shows commands and their aliases, description and usage",
	usage: "<command name>",
    execute: function (message, client, args) {
		const data = [];
		const { commands } = message.client;
		console.log(args);

		if (!args.length) {
			data.push('Here\'s a list of spaghetti:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nTry \`${config.prefix}help [command name]\` to get info on a specific command.`);

			return message.channel.send(data, { split: true })
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.channel.send(`<:fledpokerface:821087177525166151> I don't know about that command.`);
		}

		data.push(`Command: **${command.name}**`);

		if (command.description) data.push(`DESCRIPTION: \`${command.description}\``);
		if (command.aliases) data.push(`ALIASES: \`${command.aliases.join(', ')}\``);
		if (command.usage) data.push(`USAGE: \`${config.prefix}${command.name} ${command.usage}\``);
		message.channel.send(data, { split: true });
    },

};
