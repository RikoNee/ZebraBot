const Discord = require("discord.js");
const { getCurrentQueue } = require('./utils/lavalink.js');

module.exports.run = async (client, msg) => {
    let queue = getCurrentQueue(client.config.LAVALINK.QUEUES, msg.guild.id);
    if (!client.player.get(msg.guild.id)) { return msg.channel.send('❌ Le bot n\'est actuellement pas connecté dans un salon vocal.'); }
    if (queue.length === 0) { return msg.channel.send('⚠ La file d\'attente est vide.'); }
    else if (queue.length !== 1) { queue.splice(1, queue.length); }
        msg.channel.send('✅ La file d\'attente a bien été supprimée.');
    }

    module.exports.help = {
        name : "clearmusic",
        alliase: [],
        type: "bot",
    }