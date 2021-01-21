const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

    


    const { get } = require('superagent')
    .get('https://animals.anidiots.guide/tiger')
        .end((err, response) => {
          let tiger_embed = new Discord.RichEmbed()
          .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${response.body.link})`)
          .setImage(response.body.link)
          .setColor("0x81DAF5")
          .setFooter("Tiger")
          .setTimestamp()    
          msg.channel.send(tiger_embed)
});

}
    

module.exports.help = {
    name: "tiger",
    alliase: [],
    type: "bot",
}
