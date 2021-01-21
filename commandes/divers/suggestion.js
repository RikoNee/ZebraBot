const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

    message.delete()
    const suggestion = args.slice().join(" ");
    if (!args[0]) return message.channel.send("Merci de mettre une suggestion.");
    const channel = client.channels.get('591734121177284619')
    let embed = new Discord.RichEmbed()
    .setFooter(`Suggestion par ${message.author.tag}.`)
    .setAuthor(message.author.tag)
    .setDescription(suggestion)
    .setTimestamp()
    channel.send(embed)
      .then(function (message) {
        message.react("👍")
        message.react("👎")
      });   
  message.channel.send("Suggestion envoyé ! :ok_hand:").then(msg => {
    setTimeout(() => {
      msg.delete()
    }, 2000)
  })
  


}
    

module.exports.help = {
    name: "suggestion",
    alliase: [],
    type: "bot",
}
