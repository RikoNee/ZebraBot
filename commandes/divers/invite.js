const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message) => {

    if(!message.channel.guild) return message.channel.send("Cette commande est juste pour les serveurs")
    var embed = new Discord.RichEmbed()
    .setTitle(">> Clique ici pour ajoutez " + `${client.user.username}` + " <<")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=589135392368754772&scope=bot&permissions=1610087935")
    .setTimestamp()
    .setFooter(`Demander par | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send(":white_check_mark: | Regarde tes messages privé.")
    message.author.send({embed})

}    
    

module.exports.help = {
    name: "invite",
    alliase: [],
    type: "bot",
}
