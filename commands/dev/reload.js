const { readdirSync } = require('fs');
module.exports = {
    
    //Command Info
    name: 'reload',
    description: "Reloads a command",
    usage: "<args>",
    guildOnly: false,
    args: true,

    //JSDocs
    /**
     * @param {import('discord.js').Message} message
     * @param {import('discord.js').Client} client
     * @param {string[]} args
     */

    //Execute function
    execute: function (message, client, args) {

        try {
            //Ignores if not bot dev
            if (message.author.id != 343354536615739402) {
                return message.channel.send("You are not Fledrox");
            }
            //commandName is the argument
            const commandName = args[0].toLowerCase();
            //Gets bot's commands and aliases
            const command = message.client.commands.get(commandName)
                || message.client.commands.find(cmd =>
                    cmd.aliases && cmd.aliases.includes(commandName));
            const commandFolders = readdirSync('./commands');
            const folderName = commandFolders.find(folder => readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));
            
            //Checks if args are an existing command
            if (!command) return message.channel.send(
                `There is no command with name or alias \`${commandName}\`, ${message.author}!`);

            //Delete cache
            delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

            //Reload command
            try {
                const newCommand = require(`../${folderName}/${command.name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
            } catch (error) {
                console.error(error);
                message.channel.send(`I couldn't reload \`${command.name}\`:\n\`${error.message}\``);
            }
            message.channel.send(`Command \`${command.name}\` was reloaded.`);

            //CODE GOES HERE

        } catch (error) {
            console.log(error)
        }

},
};
