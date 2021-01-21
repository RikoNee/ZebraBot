const Discord = require("discord.js");

const channelTypes = {
    dm: 'DM',
    group: 'Group DM',
    text: 'Salon texte',
    voice: 'Salon Vocal',
    category: 'Category',
    unknown: 'Unknown',
};

module.exports.run = async (client, message) => {
    
    message.delete()
    if (!message.guild.members.has(message.guild.ownerID)) await message.guild.members.fetch(message.guild.ownerID);
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setFooter("© Zébra'Bot")
        .setTimestamp()
        .setTitle('Information du serveur')
        .setThumbnail(message.guild.iconURL)
        .addField(':arrow_right: Nom', message.guild.name, true)
        .addField(':arrow_right: ID', message.guild.id, true)
        .addField(':arrow_right: Région', message.guild.region.toUpperCase(), true)
        .addField(':arrow_right: Crée le', message.guild.createdAt.toDateString(), true)
        .addField(':arrow_right: Créateur', message.guild.owner.user.tag, true)
        .addField(':arrow_right: Membres', message.guild.memberCount, true)
        .addField(':arrow_right: Rôles', message.guild.roles.map(role => role.toString()).join(' **|** '), true)
        .addField(':arrow_right: Catégories', message.guild.channels.filter(channel => channel.type === 'category').map(category => category.toString()).join(' **|** '), true)
        .addField(':arrow_right: Salons', message.guild.channels.filter(channel => channel.type !== 'category').map(channel => channel.toString()).join(' **|** '), true);
    
    return message.channel.send(embed);
}

module.exports.help = {
    name : "infoserver",
    alliase: [],
    type: "bot",
}
