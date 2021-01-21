const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot n\'est actuellement pas connecté dans un salon vocal.'); }
        msg.channel.send('⏩ Passage en cours...')
            .then((m) => {
                m.delete();
                try {
                    player.stop();
                } catch (exception) {
                    if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
                }
            });
}


module.exports.help = {
    name : "skip",
    alliase: [],
    type: "bot",
}