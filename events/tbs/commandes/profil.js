const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    let profil = client.db.ensure(msg.author.id, client.profil)
    if (profil.start === 0) return msg.channel.send("Faite la commande `s!start` avant.")
    let profil_embed = new Discord.RichEmbed()
    .setColor("")
    .setTitle('Page du profil')
    .setDescription("Toutes vos informations sur vous.")
    .addField("Nom:", msg.author.username, true)
    .addField("Personnage:", profil.personnage, true)
    .addField("Level:", profil.level, true)
    .addField("XP:", profil.xp, true)
    .addField("Ressources:", "<:dollard:592451586446458913>: " + profil.dollars + "\n<:donuts:592413422990131220>: " + profil.donuts, true)
    .addField("Matériaux:", "Fer: " + profil.acier + "\nBois: " + profil.bois + "\nPierre: " + profil.pierre, true)
    .addField("Autres ressources: ", "Boite de vote: " + profil.boxvote + "\nClé vote: " + profil.clevote, false)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    msg.channel.send(profil_embed)
}

module.exports.help = {
    name : "profil",
    type: "bot",
} 
