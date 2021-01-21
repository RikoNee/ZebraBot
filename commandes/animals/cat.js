const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {


   const { body } = await superagent.get(`https://arisia.glitch.me/api/v1/cat`)
  

    let cat_embed = new Discord.RichEmbed()
    .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${body.url})`)
    .setImage(body.url)
    .setColor("0x81DAF5")
    .setFooter("Cat")
    .setTimestamp()    
    msg.channel.send(cat_embed)

}
    

module.exports.help = {
    name: "cat",
    alliase: [],
    type: "bot",
}
