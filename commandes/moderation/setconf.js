const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings);
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send("Erreur `permission manquante`: ADMINISTRATOR")
    let args = msg.content.split(/\s+/g)
    let mention = msg.mentions.channels.first() || msg.mentions.roles.first()
    const [none, prop, ...value] = args;
    if (!args[1]) {
        let setconf_embed = new Discord.RichEmbed()
        .setColor("#3377ff")
        .setTitle("Configuration de vos commandes.")
        .setDescription("Ici sera toute les commandes pour configurer votre serveur.")
        .addField('Commandes:', `${guildConf.prefix}setconfig prefix: Changer le prefix du serveur.\n${guildConf.prefix}setconfig logs: Changer le channel de log.\n${guildConf.prefix}setconfig autorole: Ajoute le rôle des qu'un membre rejoint le serveur.\n${guildConf.prefix}setconfig mod: Ajoute un rôle en temps que modérateur des commandes.\n${guildConf.prefix}setconfig bvn: Affiche les paramètre du bienvenue.\n${guildConf.prefix}setconfig leave: Affiche les paramètre du leave.`)
        .addField('Informations:', `La commande **${guildConf.prefix}setconfig prefix** peut prendre en compte qu'un seul caractère pour le prefix.`)
        .setThumbnail(client.user.avatarURL)
        .setFooter("© Zébra", client.user.avatarURL)
        msg.channel.send(setconf_embed)
        return
    }
    if (prop === "bvn") {
        let setconf_embed = new Discord.RichEmbed()
        .setColor("#3377ff")
        .setTitle("Configuration de vos commandes de bienvenue.")
        .setDescription("Ici sera toute les commandes pour configurer votre message de bienvenue.")
        .addField('Commandes:', `\`${guildConf.prefix}setconfig joinChannel\`: Changer le channel de message pour le bienvenue.\n(channelMention)\n\`${guildConf.prefix}setconfig couleurBvn\`: Change la couleur du "BIENVENUE".\n(Format #000000)\n\`${guildConf.prefix}setconfig couleurPseudoBvn\`: Change la couleur du pseudo du membre qui rejoint.\n(Format #000000)\n\`${guildConf.prefix}setconfig couleurCercleBvn\`: Change la couleur du cercle.\n(Format #000000)\n\`${guildConf.prefix}setconfig couleurMemberCount\`: Change la couleur de la phrase memberCount.\n(Format #000000\n\`${guildConf.prefix}setconfig LienBvn\`: change la banière quand un membre rejoint.\n(Lien de la banière)\n\`${guildConf.prefix}setconfig bvn\`: Affiche les paramètre du bienvenue.`)
        .setThumbnail(client.user.avatarURL)
        .setFooter("© Zébra", client.user.avatarURL)
        msg.channel.send(setconf_embed)
        return
    }
    if (prop === "leave") {
        let setconf_embed = new Discord.RichEmbed()
        .setColor("#3377ff")
        .setTitle("Configuration de vos commandes de leave.")
        .setDescription("Ici sera toute les commandes pour configurer votre message de leave.")
        .addField('Commandes:', `\`${guildConf.prefix}setconfig LeaveChannel\`: Changer le channel de message pour le leave. (channelMention)\n\`${guildConf.prefix}setconfig colorLeave\`: Change la couleur de "AU REVOIR". (Format #000000)\n\`${guildConf.prefix}setconfig colorPseudoLeave\`: Change la couleur du pseudo du membre qui quitte. (Format #000000)\n\`${guildConf.prefix}setconfig colorCercleLeave\`: Change la couleur du cercle. (Format #000000)\n\`${guildConf.prefix}setconfig cooleorMemberCountLeave\`: Change la couleur de la phrase MemberCount\n(Format #000000)\n\`${guildConf.prefix}setconfig LinkLeave\`: change la banière quand un membre quitte. (Lien de la banière)\n\`${guildConf.prefix}setconfig leave\`: Affiche les paramètre du leave.`)
        .setThumbnail(client.user.avatarURL)
        .setFooter("© Zébra", client.user.avatarURL)
        msg.channel.send(setconf_embed)
        return
    }
    if(!client.settings.has(msg.guild.id, prop)) {
        return msg.channel.send("Erreur `paramètre`: " + guildConf.prefix + "setconfig <paramètre> <valeur>");
    }
    if (args[3] && prop === "prefix" || args[3] && prop === "logs" || args[3] && prop === "autorole" || args[3] && prop === "mod" || args[3] && prop === "colorBvn" || args[3] && prop === "colorPseudo" || args[3] && prop === "colorCercle" || args[3] && prop === "LinkBvn" || args[3] && prop === "joinChannel" || args[3] && prop === "LeaveChannel" || args[3] && prop === "colorLeave" || args[3] && prop === "colorPseudoLeave" || args[3] && prop === "colorCercleLeave" || args[3] && prop === "LinkLeave" || args[3] && prop === "colorMemberCount" || args[3] && prop === "colorMemberCountLeave") return msg.channel.send("Erreur `valeur`: " + guildConf.prefix + "setconfig <paramètre> <valeur>\nLa valeur ne peut pas contenir plusieurs mots.")
    if (!args[2]) return msg.channel.send("Erreur `valeur`: " + guildConf.prefix + "setconfig <paramètre> <valeur>\nLa valeur ne peut pas être vide.");
    if (mention && prop === "prefix" || mention && prop === "colorBvn" || mention && prop === "colorPseudo" || mention && prop === "colorCercle" || mention && prop === "LinkBvn" || mention && prop === "colorLeave" || mention && prop === "colorPseudoLeave" || mention && prop === "colorCercleLeave" || mention && prop === "LinkLeave" || mention && prop === "colorMemberCount" || mention && prop === "colorMemberCountLeave") return msg.channel.send("Erreur `valeur`: " + guildConf.prefix + "setconfig <paramètre> <valeur>\nLa valeur ne peux pas être une mention.")
    if (mention && prop === "logs" || mention && prop === "mod" || mention && prop === "autorole" || mention && prop === "joinChannel" || mention && prop === "LeaveChannel") {
        client.settings.set(msg.guild.id, mention.id, prop);
        msg.channel.send("Le `" + prop + "` du serveur a été changé en `" + mention.name + "`");
        return
    }
    if (!mention && prop === "logs" || !mention && prop === "mod" || !mention && prop === "autorole" || !mention && prop === "ChannelBvn" || !mention && prop === "interserver" || !mention && prop === "LeaveChannel") {
        msg.channel.send("Veuillez mentionner un channel ou rôle.");
        return
    }
    client.settings.set(msg.guild.id, args[2], prop);
    msg.channel.send("Le `" + prop + "` du serveur a été changé en `" + value + "`");
}

module.exports.help = {
    name : "setconfig",
    alliase: [],
    type: "bot",
}
