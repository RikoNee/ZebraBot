const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

   msg.delete()
   let help_embed = new Discord.RichEmbed()
  .addField("**🔗 • Infos (3)**","`infouser` • `infochannel` • `infoserver`")  
  .setTimestamp()
  .setColor("#3377ff")
  .setFooter("Infos", client.user.avatarURL)
  msg.channel.send(help_embed)
    
}

module.exports.help = {
    name : "infos",
    alliase: [],
    type: "bot",
} 
