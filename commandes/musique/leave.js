const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    if (!client.player.get(msg.guild.id)) { return msg.channel.send('❌ Le bot n\'est actuellement pas connecté dans un salon vocal.'); }
    if (queue.length > 0) { queue.splice(0, queue.length); }
        try {
            client.player.leave(msg.guild.id);
            return msg.channel.send('Le bot a bien quitté le salon vocal. 👌');
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }
}

module.exports.help = {
    name : "leave",
    alliase: [],
    type: "bot",
}