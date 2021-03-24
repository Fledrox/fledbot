const command = {
    name: 'info',
    description: "Informations of the bot.",
    args: true,
    execute: function (message, client, args) {

        const config = require('../../config.json')
        try {
            switch(args[0]){
                case 'version':
                    message.channel.send("Bot version: " + config.version);
                    break;
                case 'creator':
                    message.channel.send("Bot created by " + config.creator);
                    break;
                case 'credits':
                    message.channel.send(config.credits);
                    break;
                case 'token':
                    message.channel.send("Bot token: Lol you thought");
                    break;
                default:
                    message.channel.send("I'm not sure this info exists.");
                }
        } catch (error) {
            console.log(error);
        }
},
};

module.exports = command;