const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

const { body } = await superagent.get(`https://nekos.life/api/v2/img/woof`)

            let woof_embed = new Discord.RichEmbed()
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${body.url})`)
            .setImage(body.url)
            .setColor("0x81DAF5")
            .setFooter("Dog")
            .setTimestamp()    
            msg.channel.send(woof_embed)
        }
    

module.exports.help = {
    name: "dog",
    alliase: [],
    type: "bot",
}

