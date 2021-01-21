const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings);
    let splitMessage = msg.content.split(" ")
    let args = splitMessage.slice(1)
    let rban = args.join(" ").slice(22)
    if (!msg.member.hasPermission('BAN_MEMBERS') && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permission manquante`: BAN_MEMBERS")
    let mention = msg.mentions.users.first();
    let channel = msg.guild.channels.find(ch => ch.id === guildConf.logs)
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
                msg.channel.send(`<a:creation:591479597439254528> Salon crée.\nVeuillez refaire la commande.`)
                return
            } else {
                let banmember = msg.guild.member(mention)
                if (msg.author.id === mention.id) return msg.channel.send('Erreur `critique`: tentative de banissement sur soi-même')
                if (!banmember) return msg.channel.send('Aucune personne trouvé ou impossible de le bannir.')
                if (!rban) return msg.channel.send("Erreur `raison`: " + guildConf.prefix + "ban <@mention> <raison>")
                msg.delete()
                banmember.ban().then(member => {
                    let log_embed = new Discord.RichEmbed()
                    .setTitle('Log ban')
                    .setColor('#FF0000')
                    .setDescription("Informations sur la commande 'ban' effectué.")
                    .addField('Auteur:', msg.author.username, true)
                    .addField('Membre exclu:', member.user.username, true)
                    .addField('Raison:', rban)
                    .setFooter('© Zébra', client.user.avatarURL)
                    .setTimestamp()
                    msg.guild.channels.find(ch => ch.id === guildConf.logs).send(log_embed)
                })
            }
        } else {
            msg.channel.send('Veuillez configurer votre channel logs avec ' + guildConf.prefix + 'setconfig logs <@channelMention>')
        }
    } else {
        msg.channel.send('Erreur `mention`: ' + guildConf.prefix + "ban <@mention> <raison>")
        return
    }
}

module.exports.help = {
    name : "ban",
    alliase: [],
    type: "bot",
}