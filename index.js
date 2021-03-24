//Start of code

//Requirements
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
const commandFiles = fs.readdirSync('./commands').filter(file =>file.endsWith('.js'));

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const config = require('./config.json');


//Login
client.login(config.token);

//On client startup
client.on("ready", () =>{
    console.log("Bot is up and ready.");

    //Discord presence
    client.user.setPresence({
        activity: {
            name: 'Some cool status'
        }, status: 'idle'
    });
});

//Listen for commands

//Check if it has prefix, or if author is a bot
client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    //Splices arguments and sets them to lowercase
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    //Include command aliases
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    //If it's not a command
    if (!command) return;

    //If it's not in #bot-testing or #bots
    if (message.channel.id == 699639314501337088 || message.channel.id == 647788572627435520){
        true;
    } else {
        message.channel.send("Wrong channel");
        return console.log(message.channel.id);
    }

    //If command is done in DMs and guildOnly = true, ignores command
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply("<:fledpokerface:821087177525166151> I can't do that in DMs!");
    }

    //Check if author has required permissions for command
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
     	return message.channel.send(`<:fledbonk:758604306227396619> <@${message.author.id}> You can't do that lol`);
        }
    }

    //Checks if command must have arguments
    if (command.args && !args.length) {
        return message.channel.send(`<:fledpokerface:821087177525166151> This command needs arguments! Type \`/help <command>\` for a list of them.`);
    }

    //EXECUTE COMMAND
	try {
		command.execute(message, client, args);
        console.log(message.author.username, "executed command", command.name);
	} catch (error) {
        console.log("SHOWING ERROR LOGS FOR COMMAND: ", commandName);
		console.error(error);
		message.channel.send('<:fledburger:762283936742506526> Executing that command was an epic fail');
	}
});

//tests index.js
client.on('message', message => {
    if (message.content === config.prefix + 'main'){
        try{
            message.channel.send('<:fledtroll:821813805210271774> Index is up.')
        } catch (error) {
            console.log(error);
        }
    }
});
