const { readdirSync } = require('fs');
const { resolve } = require('path');

const commandsPath = resolve(process.cwd(), 'commands');

/**
 * @param {import('discord.js').Client} client
 */
module.exports.handle = (client) => {
	for (const category of readdirSync(commandsPath)) {
		const commands = readdirSync(`${commandsPath}/${category}`).filter((command) => command.endsWith('.js') && require(`${commandsPath}/${category}/${command}`).name);

		for (const file of commands) {
			const command = require(`${commandsPath}/${category}/${file}`);

			command.category = `${category[0].toUpperCase()}${category.slice(1)}`;

			if (!command.name) console.error(`You forgot to add a name to the export of the ${file} command!`);

			client.commands.set(command.name, command);
		}
	}
};
