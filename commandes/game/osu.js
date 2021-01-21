const Discord = require("discord.js");
const fs = require('fs')
const osu = require('node-osu')

module.exports.run = async (client, msg) => {
    const osuApi = new osu.Api('fad79fdcb72e8b6ede4022ec8e38f4a7e492900c')
    let splitMessage = msg.content.split(" ")
    if (!splitMessage[1]) return msg.channel.send('Erreur `paramètre`: ' + client.config.BOT_PREFIX + "osu <paramètre> <mode> <pseudo>\nParamètre disponible: `users`")
    if (splitMessage[1] === 'users') {
        let args = splitMessage.slice(3).join(" ")
        let mode = 0;
        if (!splitMessage[2]) return msg.channel.send('Erreur `mode`: ' + client.config.BOT_PREFIX + "osu <paramètre> <mode> <pseudo>\nMode disponible: `std` • `mania` • `taiko` • `ctb`")
        if (splitMessage[2] === "std") {mode = 0;} else {}
        if (splitMessage[2] === "taiko") {mode = 1;} else {}
        if (splitMessage[2] === "mania") {mode = 3;} else {}
        if (splitMessage[2] === "ctb") {mode = 2;} else {}
        if (!args) return msg.channel.send('Erreur `pseudo`: ' + client.config.BOT_PREFIX + "osu <paramètre> <mode> <pseudo>")
        osuApi.getUser({u: args,m: mode}).then(user => {
            let user_embed = new Discord.RichEmbed()
            .setTitle('Osu!')
            .setColor('#FF0078')
            .setDescription('Information du profile osu demandé (' + splitMessage[2] + ")")
            .addField('Nom:', user.name, true)
            .addField('Level:', Math.round(user.level), true)
            .addField('Pays:', user.country, true)
            .addField('Classement global:', user.pp.rank, true)
            .addField('PP:', Math.round(user.pp.raw), true)
            .addField('Classement du pays:', user.pp.countryRank, true)
            .addField('Parti joué:', user.counts.plays, true)
            .addField('SS:', user.counts.SS, true)
            .addField('SS d\'argent:', user.counts.SSH, true)
            .addField('Score total:', user.scores.total, true)
            .addField('Acc:', Math.round(user.accuracy), true)
            .addField('Score classée:', user.scores.ranked, true)
            .addField('Pour plus d\'informations:', `https://osu.ppy.sh/users/${user.id}`)
            .setFooter(msg.author.username + "#" + msg.author.discriminator + " • Osu!", msg.author.avatarURL)
            .setTimestamp()
            msg.channel.send(user_embed)
        }).catch(err => msg.channel.send('Erreur: `' + err + '`'))
    }
    
}

module.exports.help = {
    name : "osu",
    alliase: [],
    type: "bot",
}