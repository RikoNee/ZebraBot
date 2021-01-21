const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    let args = msg.content.split(' ').slice(1);
    const query = args.join(' ');
    const player = client.player.get(msg.guild.id);
    let channel;
    if (!msg.member || !msg.member.voiceChannel) { return msg.channel.send('❌ Vous devez être connecté dans un salon vocal pour faire cette commande.'); }
    if (!msg.member.voiceChannel && !query) { return msg.channel.send('❌ Vous devez spécifier un salon !'); }
    else if (query) {
        channel = msg.guild.channels.filter((c) => c.type === 'voice').find((c) => c.name.toLowerCase() === query.toLowerCase() || c.id === query);
        if (!channel) { return msg.channel.send('❌ Aucun salon trouvé !'); }
    }
    else if (msg.member.voiceChannel) { channel = msg.member.voiceChannel; }
    else { return msg.channel.send('❌ Aucun salon trouvé !'); }
    if (player) { return msg.channel.send('❌ Le bot est déjà connecté dans un salon vocal.'); }
        try {
            client.player.join({
                guild: msg.guild.id,
                channel: channel.id,
                host: client.player.nodes.first().host
            }, { selfdeaf: true });
            return msg.channel.send('Le bot a bien rejoint le salon **' + channel.toString() + '**. 👌');
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }
}

module.exports.help = {
    name : "join",
    alliase: [],
    type: "bot",
}