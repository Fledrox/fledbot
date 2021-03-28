// Requirements
const { MessageEmbed } = require('discord.js');
const { normalizePermissions } = require('../../util/functions');

module.exports = {

	// Command info
	name: 'help',
	aliases: ['command'],
	description: 'Shows commands and their aliases, description and usage',
	usage: '<command name>',

	/** JSDOCS
	 *
	 * @param {import('discord.js').Message} message
	 * @param {import('discord.js').Client} client
	 * @param {string[]} args
	 */

	// Execute function
	execute: function (message, client, args) {
		if (!args[0]) return getAll(message, client);
		return getCommand(message, client, args[0]);
	},
};

/** JSDOCS
 *
 * @param {import('discord.js').Message} message
 * @param {import('discord.js').Client} client
 */

// Embed to get all commands
const getAll = (message, client) => {
	const embed = new MessageEmbed()
		.setColor(client.config.colour)
		.setTitle("Here's some spaghetti")
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter(`To see a command descriptions, usage etc. use ${client.config.prefix}help <command>`);
	// Sets command categories
	const commands = (category) => {
		return client.commands
			.filter((cmd) => cmd.category === category)
			.map((cmd) => `\`${cmd.name}\``)
			.join(', ');
	};

	message.channel.send(embed.setDescription([...new Set(client.commands.map(cmd => cmd.category))].map((category) => `**${category}** \n${commands(category)}`).reduce((string, category) => string + '\n' + category)));
};

/** JSDOCS
 *
 * @param {import('discord.js').Message} message
 * @param {import('discord.js').Client} client
 * @param {string} input
 */

const getCommand = (message, client, input) => {
	const embed = new MessageEmbed();

	// Call the command by the name or alias
	const cmd = client.commands.get(input.toLowerCase()) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(input));

	let info = `No information found for command **${input.toLowerCase()}**`;

	// If no command is found, send the "not found" embed
	if (!cmd) {
		return message.channel.send(embed.setColor(client.config.colour).setDescription(info));
	}

	// Include every existing command info to the embed
	if (cmd.name) info = `**Command name**: \`${cmd.name}\``;
	if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map((a) => `\`${a}\``).join(', ')}`;
	if (cmd.description) info += `\n**Description**: \`${cmd.description}\``;
	if (cmd.usage) info += `\n**Usage**: \`${client.config.prefix}${cmd.name} ${cmd.usage}\``;
	if (cmd.permissions) info += `\n**Permissions**: ${normalizePermissions(cmd.permissions)}`;

	message.channel.send(embed.setColor(client.config.colour).setDescription(info));
};
