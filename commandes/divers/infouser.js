
const Discord = require("discord.js");
const fs = require('fs')

module.exports.run = async (client, message, args, con) => {
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const user = message.author;


    message.delete()
    const roles = member.roles.map(role => role.toString());
    const color = member.roles.find(role => role.name.charAt(0) === '#');
    const embed = new Discord.RichEmbed()
        .setTitle("Information d'utilisateur.")
        .setThumbnail(user.displayAvatarURL)
        .addField(':arrow_right: Pseudo', user.username, true)
        .addField(':arrow_right: Surnom', member.username || 'Aucun', true)
        .addField(':arrow_right: ID', user.id, true)
        .addField(':arrow_right: Compte crée le', user.createdAt.toDateString(), true)
        .addField(':arrow_right: Rejoint le', member.joinedAt.toDateString(), true)
        .addField(':arrow_right: Rôles', roles.join(' **|** '), true)
        .setColor(0x00AE86)
        .setFooter("© Zébra'Bot")
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name : "infouser",
    alliase: [],
    type: "bot",
}
