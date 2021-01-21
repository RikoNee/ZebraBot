const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

    


    const { get } = require('superagent')
    .get('https://animals.anidiots.guide/lion')
        .end((err, response) => {
            let lion_embed = new Discord.RichEmbed()
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${response.body.link})`)
            .setImage(response.body.link)
            .setColor("0x81DAF5")
            .setFooter("Lion")
            .setTimestamp()    
            msg.channel.send(lion_embed)
});

}
    

module.exports.help = {
    name: "lion",
    alliase: [],
    type: "bot",
}
