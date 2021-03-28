//Requirements
const { readdirSync } = require('fs');
const { resolve } = require('path');

const commandsPath = resolve(process.cwd(), 'commands');

/**
 * @param {import('discord.js').Client} client
 */

// Defines commands
module.exports.handle = (client) => {
	for (const category of readdirSync(commandsPath)) {
		const commands = readdirSync(`${commandsPath}/${category}`).filter((command) => command.endsWith('.js') && require(`${commandsPath}/${category}/${command}`).name);

		// Defines file
		for (const file of commands) {
			const command = require(`${commandsPath}/${category}/${file}`);

			command.category = `${category[0].toUpperCase()}${category.slice(1)}`;

			// If I ever forget to put "name" in a command info
			if (!command.name) console.error(`You forgot to add a name to the export of the ${file} command!`);

			client.commands.set(command.name, command);
		}
	}
};
