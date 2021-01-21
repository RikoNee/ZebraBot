const Discord = require("discord.js");

module.exports.run = async (client,msg,args) => {
        const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
        if (!msg.member.hasPermission('MANAGE_MESSAGES') && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permissions manquante`: MANAGE_MESSAGES")
        let count = args[0]
        if (!count) return msg.channel.send("Erreur `message`: Veuillez indiquer un nombre de messages à supprimer.")
        if (isNaN(count)) return msg.channel.send("Erreur `nombre`: Veuillez indiquer un nombre valide.")
        if (count < 1 || count > 100) return msg.channel.send("Erreur `nombre`: Veuillez indiquer un nombre entre 1 et 99.")
        msg.channel.bulkDelete(parseInt(count) + 1).then(messages=>{
	msg.channel.send(messages.size+" message(s) supprimé(s)").then(m=>m.delete(2000))
	})
	}

module.exports.help = {
    name : "clear",
    alliase: [],
    type: "bot",
}
