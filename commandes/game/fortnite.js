module.exports.run = async (client,message,args,prefix,error,check)  =>{
    const Discord = require ("discord.js")
    const Fortnite = require('fortnite');
    const stats = new Fortnite("3a09ac8d-29b0-448c-84ca-75bbbf4977c6");

    var username = message.content.split(' ').slice(2).join(' ')
    var platform = args[0]
    if(!['pc', 'xbl', 'psn'].includes(args[0]) && !args[1]) return message.channel.send('Erreur `mode`: ' + client.config.BOT_PREFIX + "fortnite <plateforme> <pseudo>\nMode disponible: `pc, psn, xbl`");
    if(!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send('Erreur `pseudo`: ' + client.config.BOT_PREFIX + "fortnite <plateforme> <pseudo>");
    if(!args[1])return message.channel.send('Erreur `pseudo`: ' + client.config.BOT_PREFIX + "fortnite <mode> <pseudo>");

    stats.user(username, platform).then(data => {
        var embed = new Discord.RichEmbed()
        .addField(`Pseudo :`,data.username,true)
        .addField(`Platforme :`,data.platform,true)
        .addField(`Solo :`,`**Score :** ${data.stats.solo.score}\n**Match :** ${data.stats.solo.matches}\n**Kills :** ${data.stats.solo.kills}`)
        .addField(`Duo :`,`**Score :** ${data.stats.duo.score}\n**Match :** ${data.stats.duo.matches}\n**Kills :** ${data.stats.duo.kills}`)
        .addField(`Section :`,`**Score :** ${data.stats.squad.score}\n**Match :** ${data.stats.squad.matches}\n**Kills :** ${data.stats.squad.kills}`)
        .addField(`Pour plus d'informations :`,data.url)
        .setThumbnail(`https://upload.wikimedia.org/wikipedia/fr/0/07/Fortnite_Battle_Royale_Logo.png`)
        .setFooter(`${message.author.tag} • Fortnite `, message.author.displayAvatarURL)
        .setTimestamp()
        .setColor('03a4b1')
        message.channel.send(embed)
    }).catch(err => message.channel.send(`Joueur Fortnite non trouvé, vérifiez le pseudo et la plateforme.`))
}

module.exports.help = {
    name:"fortnite",
    alliase: [],
    type: "bot",

}
