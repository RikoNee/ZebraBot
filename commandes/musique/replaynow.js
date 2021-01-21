const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
    if (queue.length === 0) { return msg.channel.send('❌ La file d\'attente est vide.'); }
        msg.channel.send('⏮ Remise à 0...')
            .then((m) => {
                m.delete();
                try {
                    if (queue[0].loop) { player.stop(); }
                    else {
                        queue[0].loop = true;
                        player.stop();
                        setTimeout(() => {
                            queue[0].loop = false;
                        }, 1000);
                    }
                } catch (exception) {
                    if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
                }
            });
}







module.exports.help = {
    name : "replaynow",
    alliase: [],
    type: "bot",
}