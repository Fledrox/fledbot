const command = {
    name: 'test',
    aliases: ['poke', 'ch'],
    description: "Tests whether command handling works",
    usage: "",
    execute: function (message) {
        message.channel.send("Command handler works as intented.");
    },
};

module.exports = command;
