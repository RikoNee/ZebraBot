const Discord = require("discord.js");
const fs = require('fs')

module.exports.run = async (client, msg) => {
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
    if (!player.playing) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
        try {
            player.pause(true);
            return msg.channel.send('⏸ La musique est maintenant en pause.');
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }
}


module.exports.help = {
    name : "pause",
    alliase: [],
    type: "bot",
}