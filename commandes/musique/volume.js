const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    let args = msg.content.split(' ').slice(1)
    const volume = args.join(' ');
    const player = client.player.get(msg.guild.id);
    if (!player) { return msg.channel.send('❌ Le bot ne joue actuellement pas.'); }
    if (!volume || isNaN(volume)) { return msg.channel.send('❌ Vous devez spécifier un nombre compris entre **1** et **100** pour ajuster le volume.'); }
    else if (volume <= 0 || volume > 100) { return msg.channel.send('❌ Vous devez spécifier un nombre compris entre **1** et **100** pour ajuster le volume.'); }
        try {
            let vol = await player.volume(volume);
            let progressBar = ['▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬', '▬'];
            let calcul = Math.round(progressBar.length * (vol.state.volume / 100));
            progressBar[calcul] = '🔘';
            return msg.channel.send('🔊 Le volume du stream est désormais à **' + vol.state.volume + '**%.\n[`' + vol.state.volume  + '%`] ' + progressBar.join('') + ' [`100%`]');
        } catch (exception) {
            if (exception) { return msg.channel.send('❌ Une erreur est survenue, nous sommes désolé. Essayez plus tard.\n```JS\n' + exception.message + '```'); }
        }    
}

module.exports.help = {
    name : "volume",
    alliase: [],
    type: "bot",
}