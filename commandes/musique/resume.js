const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
        try {
            player.pause(false);
            return msg.channel.send('▶ La musique est de nouveau en mode play.');
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }
}








module.exports.help = {
    name : "resume",
    alliase: [],
    type: "bot",
}