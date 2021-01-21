const randomPuppy = require('random-puppy');
const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

module.exports.run = (client, message, args) => {
      if (!message.channel.nsfw) return message.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setDescription(`[Du mal à afficher l'image ? cliquer ici.](${url})`)
                    .setImage(url)
                    .setFooter("4k")
                    .setTimestamp() 
                message.channel.send({ embed });
        })

}
module.exports.help = {
    name: "4k",
    alliase: [],
    type: "bot",
}
