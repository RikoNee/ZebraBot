const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
  msg.delete()
  msg.channel.send(client.guilds.map(r => "" + r.name + ` | ${r.memberCount} membres | ` + r.owner + ''))
    return
}

if (message.content === prefix + 'serverlist') {
  message.delete()
  message.channel.send(client.guilds.map(r => "" + r.name + ` | ${r.memberCount} membres | ` + r.owner + ''))
  };

module.exports.help = {
    name : "serverlist",
    alliase: [],
    type: "owner",
}
