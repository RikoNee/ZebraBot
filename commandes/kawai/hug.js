const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

const { body } = await superagent.get(`https://nekos.life/api/v2/img/hug`)

        if(msg.mentions.members.size == 1) {
            let member = msg.mentions.members.first()
            let hug_embed = new Discord.RichEmbed()
            .setTitle(`${msg.author.username} fait un câlin à ${member.user.username}`)
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${body.url})`)
            .setImage(body.url)
            .setColor(0x81DAF5)
            .setFooter("Hug")
            .setTimestamp()    
            msg.channel.send(hug_embed)
        } else {
        let hug_embed = new Discord.RichEmbed()
        .setTitle(`${msg.author.username} fait un câlin à ${client.user.username}`)
        .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${body.url})`)
        .setImage(body.url)
        .setColor(0x81DAF5)
        .setFooter("Hug")
        .setTimestamp()
        msg.channel.send(hug_embed)
    }}
    

module.exports.help = {
    name: "hug",
    alliase: [],
    type: "bot",
}
