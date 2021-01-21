const Discord = require("discord.js");
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!args[0]) return message.channel.send("Erreur `ID`; ID manquant")
    if(!args[1]) return message.channel.send("Erreur `préfix`: préfix manquant")
    if(message.guild.members.has(args[0])) return message.channel.send("**Mais tu fais exprès ton bot est déjà sur le serveur sale miope. -_-**")
    let channel = bot.channels.get("580223602880937984");
    if(message.channel !== channel){
    return message.channel.send("Fait la commande dans `bot-invite`.")
    }else{
    bot.fetchUser(args[0]).then(i => {
    let embed = new Discord.RichEmbed()
    .setTitle("Bot ajouté à la queue.")
    .setDescription(`Merci ${message.author} pour avoir invité votre bot. Il sera d'abord testé et examiné avant [invite](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&permissions=0&scope=bot), soyez patient merci.`)
    .addField("Inviteur", `\`${message.author.username}\``, true)
    .addField("ID", `\`${args[0]}\``, true)
    .addField("Prefix", `\`${args[1]}\``, true)
    .addField("Nom", `\`${i.username}\``, true)
    .setThumbnail(i.displayAvatarURL)
    channel.send(embed).then(msg => msg.react('⏳'))
    })
    }
}

module.exports.help = {
    name : "inv",
    alliase: [],
    type: "bot",
}
