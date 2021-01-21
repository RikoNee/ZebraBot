const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

   msg.delete()
    if (!args[0]) return msg.channel.send('**Please Include an IP address**\n`l.mcserver mc.hypixel.net`');
       var ip = args[0].toLowerCase(); 
        let embed = new Discord.RichEmbed()
        .setImage(`http://status.mclive.eu/${ip}/${ip}/banner.png`)
    msg.channel.send(embed)
    .catch(error => {
      msg.channel.send(`IP: ${ip} not found!`);
  })    
}

module.exports.help = {
    name : "mc",
    alliase: [],
    type: "bot",
} 
