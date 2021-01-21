const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

   msg.delete()
   let help_embed = new Discord.RichEmbed()
  .addField("**🐯 • Animaux (5)**","`cat` • `dog` • `tiger` • `lion` • `panda`")  
  .setTimestamp()
  .setColor("#3377ff")
  .setFooter("Animals", client.user.avatarURL)
  msg.channel.send(help_embed)
    
}

module.exports.help = {
    name : "animals",
    alliase: [],
    type: "bot",
} 
