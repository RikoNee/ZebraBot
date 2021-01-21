const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let args = msg.content.split(' ').slice(1)
    const choice = args.join(' ');
    const player = client.player.get(msg.guild.id);
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    if (!choice || isNaN(choice)) { return msg.channel.send('❌ Vous devez spécifier le nombre de la musique du classement de la file d\'attente.'); }
    else if (choice <= 0 || choice > queue.length) { return msg.channel.send('❌ Aucune musique ne possède cet identifiant dans la file d\'attente.'); }
    if (!player) { return msg.channel.send('❌ Le bot n\'est actuellement pas connecté dans un salon vocal.'); }
        msg.channel.send('⏩ Passage en cours...')
            .then((m) => {
                m.delete();
                try {
                    queue.splice(0, (choice-1));
                    return player.stop();
                } catch (exception) {
                    if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
                }
            });
}



module.exports.help = {
    name : "skipto",
    alliase: [],
    type: "bot",
}