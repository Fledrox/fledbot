//discord.js requirements / client constant
const Discord = require("discord.js");
const client = new Discord.Client();

//token
const token = "NTgyMTczMjMyMzk2ODk0MjE4.XiQ67w.qrToyrqiM30FU7ghH4TelSlV6Xo";


//initialisation message
client.on("ready", () =>{
    console.log("Mario's QPUs are aligned, bot is up and ready");
});

//start of commands

//test command
client.on("message", msg=>{
    if (msg.content === "First try"){
        msg.reply("IDIOT");
    }
})



//client+token link
client.login(token);
