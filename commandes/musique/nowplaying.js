const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');
const moment = require('moment');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
    if (queue.length === 0) { return msg.channel.send('❌ La file d\'attente est vide.'); }
    try {
        let duration = moment.duration({ ms: client.config.LAVALINK.QUEUES[msg.guild.id][0].info.duration });
        let progression = moment.duration({ ms: player.state.position * 1000 });
        let progressBar = ['▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬'];
        let calcul = Math.round(progressBar.length * ((progression / 1000 / 1000) / (duration / 1000)));
        progressBar[calcul] = '🔘';

        return msg.channel.send({
            embed: {
                title: '🎶 Lecture actuelle 🎶',
                description: '[' + queue[0].info.title + '](' + queue[0].info.url + ')',
                fields: [
                    {
                        name: 'Chaîne:',
                        value: queue[0].info.author,
                        inline: false
                    },
                    {
                        name: 'Durée:',
                        value: '[`' + moment(progression/1000).minutes() + ':' + moment(progression/1000).seconds() + '`] ' + progressBar.join('') +  ' [`' + duration.minutes() + ':' + duration.seconds() + '`]',
                        inline: false
                    }
                ]
            }
        });
    } catch (exception) {
        if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
    }
}





module.exports.help = {
    name : "nowplaying",
    alliase: [],
    type: "bot",
}