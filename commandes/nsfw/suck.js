const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")
const porn = require('pornsearch')
let cooldown = new Set();
let cdseconds = 5;

module.exports.run = (client, message, args) => {
       if (!message.channel.nsfw) return message.channel.send("🔞 Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")

    var topics = [
        'suce',
        'suck'
    ]
   const Pornsearch = new porn(topics[Math.round(Math.random() * (topics.length - 1))]);
   
    Pornsearch.gifs(1)
    .then(gifs => {
        if(cooldown.has(message.author.id)){
            message.delete();
        }
        //if(!message.member.hassPermission("ADMINISTRATOR")){
            cooldown.add(message.author.id);
        //}
        let gifrnd = gifs.map(gif => gif.url)
        let url = gifrnd[Math.floor(Math.random() * gifrnd.length)]
        if (message.mentions.users.first()) {
            let embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} suce ${message.mentions.users.first().username}`)
            .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${url})`)
            .setImage(url)
            .setColor(0xFFA500)
            .setFooter("Suck")
            .setTimestamp() 
            message.channel.send({
                embed: embed
            })
        } else {
            let embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} suce ${client.user.username}`)
            .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${url})`)
            .setImage(url)
            .setColor(0xFFA500)
            .setFooter("Suck")
            .setTimestamp()
            message.channel.send({
                embed: embed
            })
        }
    })

    setTimeout(() => {
        cooldown.delete(message.author.id)

    }, cdseconds * 1000)
}

module.exports.help = {
    name: "suck",
    alliase: [],
    type: "bot",
}
