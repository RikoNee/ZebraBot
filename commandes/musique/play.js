const Discord = require("discord.js");
const { addToQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let args = msg.content.split(' ').slice(1)
    if (!msg.member || !msg.member.voiceChannel) { return msg.channel.send('❌ Vous devez être connecté dans un salon vocal pour faire cette commande.'); }
    const player = client.player.get(msg.guild.id);
    const track = args.join(' ');
    if (!track) { return msg.channel.send('❌ Vous devez spécifier un nom de musique.'); }
        try {
            if (!player) {
                client.player.join({
                    guild: msg.guild.id,
                    channel: msg.member.voiceChannel.id,
                    host: client.player.nodes.first().host
                }, { selfdeaf: true });
            }
                addToQueue(client, msg, track);
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }
}


module.exports.help = {
    name : "play",
    alliase: [],
    type: "bot",
}