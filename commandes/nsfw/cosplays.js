const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
   if (!message.channel.nsfw) return message.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")

    var subreddits = [
        'nsfwcosplay',
        'cosplayonoff',
        'cosporn',
        'cosplayboobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${url})`)
                    .setImage(url)
                    .setFooter("Cosplays")
                    .setTimestamp() 
                message.channel.send({ embed });
        })

}

module.exports.help = {
    name: "cosplays",
    alliase: [],
    type: "bot",
}
