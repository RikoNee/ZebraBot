const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Information du serveur")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Rejoint le", message.member.joinedAt)
    .addField("Membre Total", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo",
  alliase: [],
  type: "bot"
}