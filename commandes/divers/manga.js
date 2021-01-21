const Discord = require("discord.js");
const { getInfoFromName } = require('myanimelists');


module.exports.run = async (client, message) => {

    let anime = message.content.split(" ").slice(1).join(" ")
    if(!anime) return message.channel.send("Ecris le nom du manga avec ex: !manga dragon ball")
    getInfoFromName(anime)  
        .then(result => {
        let embed = new Discord.RichEmbed()
        .setTitle(result.title)
        .addField('Bande annonce:', `${result.trailer}` || `Inconnu`)
        .addField('Épisodes:', `${result.episodes}` || `Inconnu`)
        .addField('Status:', `${result.status}` || `Inconnu`)
        .addField('Studios:', `${result.studios}` || `Inconnu`)
        .addField('Genres:', `${result.genres}` || `Inconnu`)
        .addField('Classé:', `${result.ranked}` || `Inconnu`)
        .addField('Favoris:', `${result.favorites}` || `Inconnu`)
        .addField('Évaluation:', `${result.rating}` || `Inconnu`)
        .addField('Présenté en première :', `${result.premiered}` || `Inconnu`)
        .addField('Durée:', `${result.duration}` || `Inconnu`)
        .addField('Score:', `${result.score}` || `Inconnu`)
        .addField('Marqué par:', `${result.scoreStats} ` || `Inconnu`)
        .setDescription(`${result.synopsis || 'Inconnu'}`)
        .setImage(result.picture)   
        .setColor('#0a0000')
        message.channel.sendEmbed(embed) 
        })
        .catch(error => console.log(error));

}

module.exports.help = {
    name : "manga",
    alliase: [],
    type: "bot",
} 
