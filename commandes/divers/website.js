const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
msg.delete()
msg.channel.send('Bientôt')
    
}

module.exports.help = {
    name : "website",
    alliase: [],
    type: "bot",
}