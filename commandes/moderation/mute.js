const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings);
    let splitMessage = msg.content.split(" ")
    let args = splitMessage.slice(1)
    let rmute = args.join(" ").slice(22)
    let muteRoleId = msg.guild.roles.find('name', guildConf.mute)
    if (!msg.member.hasPermission('MANAGE_MESSAGES') && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permissions manquante`: MANAGE_MESSAGES")
    let mention = msg.mentions.users.first();
    let channel = msg.guild.channels.find(ch => ch.id === guildConf.logs)
    if (guildConf.mute === "off") return msg.channel.send('Aucun rôle n\'est définie.\nVeuillez faire: ' + guildConf.prefix + "setconfig mute <@role>")
    if (mention) {
        if (guildConf.logs !== "off") {
            if (!channel) {
                msg.channel.send(`:x: Aucun channel détecté.`)
                msg.channel.send(`<a:charge:591479598341160994> Création du channel ...`)
                msg.guild.createChannel(guildConf.logs, "text", [{
                    id: msg.guild.id,
                    deny: ['SEND_MESSAGE'],
                    allow: ['VIEW_CHANNEL']
                }]) 
                msg.channel.send(`<a:creation:591479597439254528> Salon crée.`)
                return 
            } else {
                if (!rmute) return msg.channel.send('Erreur `raison`: ' + guildConf.prefix + 'mute <@mention> <raison>')
                msg.guild.member(mention).addRole(muteRoleId)
                msg.delete()
                let log_embed = new Discord.RichEmbed()
                .setTitle('Log mute')
                .setColor('#FF0000')
                .setDescription("Informations sur la commande 'mute' effectué.")
                .addField('Auteur:', msg.author.username, true)
                .addField('Membre muté:', mention.username, true)
                .addField('Raison:', rmute)
                .setFooter('© Zébra', client.user.avatarURL)
                .setTimestamp()
                msg.guild.channels.find(ch => ch.id === guildConf.logs).send(log_embed)
            }
        } else {
            msg.channel.send('Veuillez configurer votre channel logs avec ' + guildConf.prefix + 'setconfig logs <@channelMention>')
        }
    } else {
        msg.channel.send('Erreur `mention`: ' + guildConf.prefix + 'mute <@mention> <raison>')
        return
    }
}

module.exports.help = {
    name : "mute",
    alliase: [],
    type: "bot",
}
