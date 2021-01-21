const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, msg) => {
    let args = msg.content.split(' ').slice(1)
    const query = args.join(' ');
    const player = client.player.get(msg.guild.id);
    let time = client.config.LAVALINK.QUEUES[msg.guild.id][0].info.duration;
    if (!player || !player.playing) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
    if (!query || isNaN(query)) { return msg.channel.send('❌ Vous devez spécifier un nombre compris entre **1** et **' + (time / 1000) + '** pour modifier la position.'); }
    else if (query <= 0 || query > (time / 1000)) { return msg.channel.send('❌ Vous devez spécifier un nombre compris entre **1** et **' + (time / 1000) + '** pour ajuster la position.'); }
        try {
            let duration = moment.duration({ ms: time });
            let progression = moment.duration({ ms: ((query * 1000) * 1000) });
            player.seek((query * 1000));
            return msg.channel.send('⏩ La position est désormais à [`' + moment(progression / 1000).minutes() + ':' + moment(progression / 1000).seconds() + '`]/[`' + duration.minutes() + ':' + duration.seconds() + '`]');
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }
}

module.exports.help = {
    name : "seek",
    alliase: [],
    type: "bot",
}