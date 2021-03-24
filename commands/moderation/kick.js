const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'kick',
    aliases: ['boot'],
    description: "Kick server members",
    guildOnly: true,
    permissions: "KICK_MEMBERS",
    args: true,
    execute: function (message, client, args) {

        try{
            if (!message.mentions.users.size) {
                message.channel.send("No user mentionned")
            } else {

                var i;
                var reasons;
                for (i = 0; i < args.length; i++) {
                reasons = reasons + args[i] + " ";
                }
                if (i < 2) {
                    var reason = "No reason specified"
                } else {
                    var reason = reasons
                }
                console.log(i + reasons + reason)
                message.channel.send(`Kicked user ${message.mentions.members.first()} for reason ${reason}`)   

            }


        } catch (error) {
            console.log(error)
        }

},
};