const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

const { body } = await superagent.get(`https://nekos.life/api/v2/img/cry`)

            let hug_embed = new Discord.RichEmbed()
            .setTitle(`${msg.author.username} est triste :'(`)
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${body.url})`)
            .setImage(body.url)
            .setColor("0x81DAF5")
            .setFooter("Cry")
            .setTimestamp()    
            msg.channel.send(hug_embed)
            };
    

module.exports.help = {
    name: "cry",
    alliase: [],
    type: "bot",
}
