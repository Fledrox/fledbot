const Discord = require('discord.js');
module.exports = {
      name: 'avatar',
      aliases: ['icon', 'pfp', 'av'],
      description: "Shows your or a mentionned user's avatar.",
      usage: "<@user>",
      execute: function (message) {
           
            var user = message.mentions.users.first() || message.author;

            let embed = new Discord.MessageEmbed()
                  .setImage(user.avatarURL())
                  .setColor('#e1730c')
            message.channel.send(embed)
            
      },
};