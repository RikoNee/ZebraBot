const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

    


    const { get } = require('superagent')
    .get('https://animals.anidiots.guide/panda')
        .end((err, response) => {
            let panda_embed = new Discord.RichEmbed()
            .setDescription(`[Du mal à afficher l'image ? Cliquez ici.](${response.body.link})`)
            .setImage(response.body.link)
            .setColor("0x81DAF5")
            .setFooter("Panda")
            .setTimestamp()    
            msg.channel.send(panda_embed)
});

}
    

module.exports.help = {
    name: "panda",
    alliase: [],
    type: "bot",
}
