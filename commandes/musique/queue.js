const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    if (!client.player.get(msg.guild.id)) { return msg.channel.send('❌ Le bot n\'est actuellement pas connecté dans un salon vocal.'); }
    if (queue.length === 0) { return msg.channel.send('❌ La file d\'attente est vide.'); }
        let text = queue.slice(0, 15).map((song, i) => (i > 0 && i < 15 ? '[**' + i + '**] - **' + song.info.title + '**' + ' - Ajouté par **' + song.author + '**' : null)).join('\n');
        msg.channel.send('Voici la liste des musiques en attente du serveur:\n\n' + (queue.length === 1 ? '**La queue est vide !**' : text + (queue.length > 15 ? '\n\nEt plus encore...' : '')) + '\n\nLecture actuelle: **' + queue[0].info.title + '** - Ajouté par **' + queue[0].author + '**')
            .catch((err) => {
                if (err) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + err.message + '```'); }
            });
}






module.exports.help = {
    name : "queue",
    alliase: [],
    type: "bot",
}