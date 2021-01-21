const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings);
    let splitMessage = msg.content.split(" ")
    let args = splitMessage.slice(1)
    let runmute = args.join(" ").slice(22)
    let muteRoleId = msg.guild.roles.find('name', guildConf.mute)
    if (guildConf.mute === "off") return msg.channel.send('Aucun rôle n\'est définie.\nVeuillez faire: ' + guildConf.prefix + "setconfig mute <@role>")
    if (!msg.member.hasPermission('MANAGE_MESSAGES') && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permission manquante`: MANAGE_MESSAGES")
    let channel = msg.guild.channels.find(ch => ch.id ===  guildConf.logs)
    let mention = msg.mentions.users.first()
    if (mention) {
        if (guildConf.logs !== "off") {
            if (!channel) {
                msg.channel.send(`:x: Aucun channel détecté.`)
                msg.channel.send(`<a:charge:591479598341160994> Création du channel ...`)
                msg.guild.createChannel(guildConf.logs, "text", [{
                  id: msg.guild.id,
                  deny: ['SEND_MESSAGES'],
                  allow: ['VIEW_CHANNEL']
                }])
                msg.channel.send(`<a:creation:591479597439254528> Salon crée.`)
                return
            } else {
                if (!runmute) return msg.channel.send('Erreur `raison`: ' + guildConf.prefix + "unmute <@mention> <raison>")
                msg.guild.member(mention).removeRole(muteRoleId)
                msg.delete()
                let log_embed = new Discord.RichEmbed()
                  .setTitle('Log unmute')
                  .setColor('#FF0000')
                  .setDescription("Informations sur la commande 'umnute' effectué.")
                  .addField('Auteur:', msg.author.username, true)
                  .addField('Membre unmuté:', mention.username, true)
                  .addField('Raison:', runmute)
                  .setFooter('© Zébra', client.user.avatarURL)
                  .setTimestamp()
                  msg.guild.channels.find(ch => ch.id === guildConf.logs).send(log_embed)
            }
        } else {
            msg.channel.send('Veuillez configurer votre channel logs avec ' + guildConf.prefix + 'setconfig logs <@channelMention>')
        }
    } else {
        msg.channel.send('Erreur `mention`: ' + guildConf.prefix + "unmute <@mention> <raison>")
        return
    }
}

module.exports.help = {
    name : "unmute",
    alliase: [],
    type: "bot",
}