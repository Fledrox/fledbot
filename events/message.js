const { normalizePermissions } = require('../util/functions');

/**
 * @param {import('discord.js').Client} client - The event client
 * @param {import('discord.js').Message} message - The event message
 */
module.exports = (client, message) => {
	if (!message.content.toLowerCase().startsWith(client.config.prefix) || message.author.bot || (!message.guild?.me.permissions.has('SEND_MESSAGES') && message.channel.type !== 'dm') ) return;

	if (!['699639314501337088', '647788572627435520', '752613055158026352'].includes(message.channel.id) && message.channel.type !== 'dm') {
		//If it's not in #bot-testing or #bots
		message.channel.send('Wrong channel');
		return console.log(message.channel.id);
	}

	//Splices arguments and sets them to lowercase
	const args = message.content.split(/ +/);
	const commandName = args.shift().slice(client.config.prefix.length).toLowerCase();

	//Include command aliases

	/**
	 * @type {{name?: string; aliases?: string[]; guildOnly?: boolean; permissions?: import('discord.js').PermissionResolvable[]; execute: (message: Message, client: Client, args: string[]) => any }}
	 * @typedef command - The command to execute
	 */
	const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
	//If it's not a command
	if (!command) return;

	//If command is done in DMs and guildOnly = true, ignores command
	if (command.guildOnly && message.channel.type === 'dm') return message.reply("<:fledpokerface:821087177525166151> I can't do that in DMs!");
	//Check if author has required permissions for command
	if (command.permissions && !message.channel.permissionsFor(message.author).has(command.permissions))
		return message.channel.send(`<:fledbonk:758604306227396619> <@${message.author.id}> You can't do that lol, you need ${normalizePermissions(message.member.permissions.missing(command.permissions))}`);
	//Checks if command must have arguments
	if (command.args && !args.length) return message.channel.send(`<:fledpokerface:821087177525166151> This command needs arguments! Type \`/help <command>\` for a list of them.`);

	//EXECUTE COMMAND
	try {
		command.execute(message, client, args.map((e) => e.toLowerCase()));
		console.log(message.author.tag, 'executed command', command.name);
	} catch (error) {
		console.log('SHOWING ERROR LOGS FOR COMMAND: ', commandName);
		console.error(error);
		message.channel.send('<:fledburger:762283936742506526> Executing that command was an epic fail');
	}
};
