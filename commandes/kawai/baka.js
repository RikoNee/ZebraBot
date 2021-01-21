const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

const { body } = await superagent.get(`https://nekos.life/api/v2/img/baka`)

        if(msg.mentions.members.size == 1) {
            let member = msg.mentions.members.first()
            let baka_embed = new Discord.RichEmbed()
            .setTitle(`T'es un(e) idiot(e) ${member.user.username} !`)
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${body.url})`)
            .setImage(body.url)
            .setColor("0x81DAF5")
            .setFooter("Baka")
            .setTimestamp()    
            msg.channel.send(baka_embed)
        } else {
            let hug_embed = new Discord.RichEmbed()
            .setTitle(`T'es un idiot ${client.user.username} !`)
            .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${body.url})`)
            .setImage(body.url)
            .setColor(0x81DAF5)
            .setFooter("Baka")
            .setTimestamp()
            msg.channel.send(hug_embed)
        }}
    

module.exports.help = {
    name: "baka",
    alliase: [],
    type: "bot",
}
