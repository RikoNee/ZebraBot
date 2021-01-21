const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
    let args = msg.content.split(" ")
    let setmod1 = guildConf.mod
    let addrole1 = guildConf.autorole
    let setlogs1 = guildConf.logs
    let BvnChannel = guildConf.joinChannel
    let leaveChannel = guildConf.LeaveChannel
    if (setmod1 === "off") { setmod1 =  "<#Pas de rôle définie>" } else {setmod1 = msg.guild.roles.get(setmod1).name}
    if (addrole1 === "off") { addrole1 =  "<#Pas de rôle définie>" } else {addrole1 = msg.guild.roles.get(addrole1).name}
    if (setlogs1 === "off") { setlogs1 = "<#Pas de channel log définie>" } else {setlogs1 = client.channels.get(setlogs1).name}
    if (BvnChannel === "off") { BvnChannel = "<#Pas de channel bienvenue définie>" } else {BvnChannel = client.channels.get(BvnChannel).name}
    if (leaveChannel === "off") { leaveChannel = "<#Pas de channel leave définie>" } else {leaveChannel = client.channels.get(leaveChannel).name}
    if (!args[1] && args[1] !== "bvn" && args[1] !== "leave") {
        let config_embed = new Discord.RichEmbed()
        .setColor("")
        .setTitle("`🔧` Configuration du serveur:")
        .addField("Préfix:", `    ${guildConf.prefix}`, true)
        .addField("Auto-Rôle:", addrole1, true)
        .addField("Langue:", guildConf.langue, true)
        .addField('Rôle Mute:', guildConf.mute, true)
        .addField("Rôle Mod:", setmod1, true)
        .addField("Channel Logs:", setlogs1, false)
        .setTimestamp()
        msg.channel.send(config_embed)
        return
    }
    if (args[1] === "bvn") {

        let configBvn_embed = new Discord.RichEmbed()
        .setColor("")
        .setTitle("Configuration du message de Bienvenue:")
        .addField("Couleur Cercle:", guildConf.colorCercle, true)
        .addField("Couleur Bienvenue:", guildConf.colorBvn, true)
        .addField('Couleur Pseudo:', guildConf.colorPseudo, true)
        .addField('Couleur MemberCount:', guildConf.colorMemberCount, true)
        .addField("Salon:", BvnChannel, true)
        .addField("Lien de l'image de Bienvenue:", `[Lien de l'image](${guildConf.LinkBvn}) (Taille conseiller: 400 X 200)`, true)
        .setTimestamp()
        msg.channel.send(configBvn_embed)
        return
    }
    if (args[1] === "leave") {

        let configLeave_embed = new Discord.RichEmbed()
        .setColor("")
        .setTitle("Configuration du message du Leave:")
        .addField("Couleur Cercle:", guildConf.colorCercleLeave, true)
        .addField("Couleur Leave:", guildConf.colorLeave, true)
        .addField('Couleur Pseudo:', guildConf.colorPseudoLeave, true)
        .addField('Couleur MemberCount:', guildConf.colorMemberCountLeave, true)
        .addField("Salon:", leaveChannel, true)
        .addField("Lien de l'image du Leave:", `[Lien de l'image](${guildConf.LinkLeave}) (Taille conseiller: 400 X 200)`, true)
        .setTimestamp()
        msg.channel.send(configLeave_embed)
        return
    }
}

module.exports.help = {
    name : "config",
    alliase: [],
    type: "bot",
}
