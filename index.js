const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready",() => {
    console.log("bot operationel");
});

Client.login("process.env.BOT_TOKEN");
