const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
   msg.delete()
   if (!msg.member.hasPermission("ADMINISTRATOR") && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permission`: Vous n'avez pas les permissions requis.")
   let args = msg.content.split(" ")
   if (args[1] === "off") { msg.channel.setRateLimitPerUser(0); msg.channel.send("Le slowmode a été désactivé."); return}
   if (!args[1]) return msg.channel.send("Erreur `nombre`: vous avez indiqué aucun nombres (en secondes).")
   if (isNaN(args[1])) return msg.channel.send("Erreur `nombre`: Vous avez indiqué une valeur qui n'est pas un nombre (en secondes).")
   msg.channel.setRateLimitPerUser(args[1])
   msg.channel.send("Le slowmode a été activé avec l'intervale de " + args[1] + " secondes.")
    
}

module.exports.help = {
    name : "slowmode",
    alliase: [],
    type: "bot",
} 
