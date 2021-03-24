//other system?
/*
module.exports = {
    name: 'play',
    description: "Plays a song!",
    execute(message, args){
        message.channel.send("Pinging...").then(m =>{
            let ping = m.createdTimestamp - message.createdTimestamp
            m.edit(`Pong! :ping_pong:\nLatency: ${ping}\nAPI latency: ${Math.round(client.ping)}`)
        })
    }
}
*/


//YTDL CORE SYSTEM
/*
const ytdl = require('ytdl-core');
var servers = {};

module.exports = {
    names: ['play'],
    description: "Plays a song!",
    execute(message, args){
        message.channel.send('test')
        function play(connection, message){
            var server = servers[message.guild.id];
           
            server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
           
            server.queue.shift();
           
            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    //console.log("dans le if");
                    play(connection, message);
                }else{
                    //console.log("dans le else");
                    connection.disconnect();

                }
            })
        }

        if(!args[1]){
            message.channel.send("Please specify a song to play")
            return;
        }
        if(!message.member.voiceChannel){
            message.channel.send("You must be in a voice channel to listen to music...")
            return;
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        
        var server = servers[message.guild.id];
        server.queue.push(args[1]);

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
            play(connection, message);



        })
        }
}
*/