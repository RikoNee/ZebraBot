const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

const { body } = await superagent.get(`http://zebra-api.tk/api/v1/neko`)

            let hug_embed = new Discord.RichEmbed()
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${body.url})`)
            .setImage(body.url)
            .setColor("0x81DAF5")
            .setFooter("Généré par Zébra-API")
            .setTimestamp()    
            msg.channel.send(hug_embed)
            };
    

module.exports.help = {
    name: "neko",
    alliase: [],
    type: "bot",
}
