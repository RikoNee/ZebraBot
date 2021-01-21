const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    client.guilds.map(g => client.settings.ensure(g.id, client.defaultSettings))
    msg.channel.send("Db sur tous les serveurs mis a jour.")
}

module.exports.help = {
    name : "db",
    alliase: [],
    type: "owner",
}
