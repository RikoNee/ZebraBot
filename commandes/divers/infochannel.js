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
    const channel = message.channel || message.guild.channels.get(args[0]);

    if (!channel) {
        return message.reply('cc');
    }
   
    const channelEmbed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setThumbnail(message.guild.iconURL)
            .setFooter("© Zébra'Bot")
            .setTimestamp()
            .setTitle('Information du salon.')
            .addField(':arrow_right: Nom', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
            .addField(':arrow_right: ID', channel.id, true)
            .addField(':arrow_right: Date de création', channel.createdAt.toDateString(), true)
            .addField(':arrow_right: NSFW', channel.nsfw ? 'Oui' : 'Non', true)
            .addField(':arrow_right: Catégorie', channel.parent ? channel.parent.name : 'Acun', true)
            .addField(':arrow_right: Type', channelTypes[channel.type], true)
            .addField(':arrow_right: Sujet', channel.topic || 'Aucun', true);

    message.channel.send(channelEmbed);
                  
}

module.exports.help = {
    name : "infochannel",
    alliase: [],
    type: "bot",
}
