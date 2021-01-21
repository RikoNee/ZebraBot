const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings);
    let splitMessage = msg.content.split(" ")
    let args = splitMessage.slice(1)
    let channel = msg.guild.channels.find(ch => ch.id === guildConf.logs)
    let bannedMember = await client.fetchUser(args[0])
    if (!msg.member.hasPermission('BAN_MEMBERS') && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permission manquante`: BAN_MEMBERS") 
    if (guildConf.logs !== "off") {
        if (!channel) {
            msg.channel.send(`:x: Aucun channel détecté.`)
            msg.channel.send(`<a:charge:591479598341160994> Création du channel ...`)
            msg.guild.createChannel(guildConf.logs, "text", [{
                id: msg.guild.id,
                deny: ['SEND_MESSAGES'],
                allow: ['VIEW_CHANNEL']
            }])
            msg.channel.send(`<a:creation:591479597439254528> Salon crée.\nVeuillez refaire la commande.`)
            return
        } else {
            if (!bannedMember) return msg.channel.send('Erreur `ID`: Aucune personne avec cette ID est banni sur le serveur.')
            let runban = args.slice(1).join(" ")
            if (!runban) runban = "Erreur `raison`: Pas de raison donnée."
            msg.guild.unban(bannedMember, {reason: runban})
            msg.delete()
            let log_embed = new Discord.RichEmbed()
            .setTitle('Log unban')
            .setColor('#FF0000')
            .setDescription("Informations sur la commande 'unban' effectué.")
            .addField('Auteur:', msg.author.username, true)
            .addField('Membre débanni:', bannedMember, true)
            .addField('Raison:', runban)
            .setFooter("© Zébra", client.user.avatarURL)
            .setTimestamp()
            msg.guild.channels.find(ch => ch.id === guildConf.logs).send(log_embed)
        }
    } else {
        msg.channel.send('Veuillez configurer votre channel logs avec ' + guildConf.prefix + 'setconfig logs <@channelMention>')
    }
}

module.exports.help = {
    name : "unban",
    alliase: [],
    type: "bot",
}