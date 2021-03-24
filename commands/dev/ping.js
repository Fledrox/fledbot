const command = {
    name: 'ping',
    execute: function (message, client, args) {
        var a = Date.now();
        message.channel.send(":outbox_tray: Pinging... ").then (async (sentMessage) => {
        sentMessage.edit(`:inbox_tray: Pong!\nAPI Latency: ${Math.round(client.ws.ping)}ms`) //Latency: ${message.createdTimestamp - Date.now()}ms\n
        console.log("message.CreatedTimestamp:", message.createdTimestamp,"\nDate.now():", a,"\nclient.ping:", client.ws.ping,)
    })
},
};

module.exports = command;