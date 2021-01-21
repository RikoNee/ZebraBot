const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")
const porn = require('pornsearch')
module.exports.run = (client, message, args) => {
       if (!message.channel.nsfw) return message.channel.send("🔞 Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")


    var topics = [
        'cum',
        'cumshot',
        'anal',
        'oral',
        'teen',
        'tits',
        "milf",
        "creampie"
    ]
   const Pornsearch = new porn(topics[Math.round(Math.random() * (topics.length - 1))]);
   
    Pornsearch.gifs(1)
    .then(gifs => {
        let gifrnd = gifs.map(gif => gif.url)
        let url = gifrnd[Math.floor(Math.random() * gifrnd.length)]
        if (message.mentions.users.first()) {
            let embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} fait l'amour à ${message.mentions.users.first().username}`)
            .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${url})`)
            .setImage(url)
            .setColor(0xFFA500)
            .setFooter("Fuck")
            .setTimestamp() 
            message.channel.send({
                embed: embed
            })
        } else {
            let embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} fait l'amour à ${client.user.username}`)
            .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${url})`)
            .setImage(url)
            .setColor(0xFFA500)
            .setFooter("Fuck")
            .setTimestamp()
            message.channel.send({
                embed: embed
            })
        }
    })
}

module.exports.help = {
    name: "fuck",
    alliase: [],
    type: "bot",
}
