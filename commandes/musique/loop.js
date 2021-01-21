const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
    if (queue.length === 0) { return msg.channel.send('❌ La file d\'attente est vide.'); }
        if (!queue[0].loop) {
            queue[0].loop = true;
            return msg.channel.send('🔁 L\'option boucle est activée, le bot va répéter la musique indéfiniment.');
        } else {
            queue[0].loop = false;
            return msg.channel.send('🔁 L\'option boucle est désactivée, le bot va poursuivre la file d\'attente.');
        }

}



module.exports.help = {
    name : "loop",
    alliase: [],
    type: "bot",
}