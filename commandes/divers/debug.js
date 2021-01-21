const Discord = require("discord.js");
const os = require('os-utils')

module.exports.run = async (client, msg) => {

    msg.delete()
    os.cpuUsage(function(v) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptime = `${Math.floor(days)}J ${Math.floor(hours)}H ${Math.floor(minutes)}M ${Math.floor(seconds)}S`
        let help_embed = new Discord.RichEmbed()
        .setTitle("Zébra")
        .addField("• Nom du bot", `Zébra#7348`, true)
        .addField("• Usage de la ram", `${(process.memoryUsage().rss / 32000).toFixed()}MB`, true)
        .addField("• Uptime", `${uptime}`,true)
        .addField("• Config", `Intel Xeon CPU W3530`,true)
        .addField("• Discord.js", `11.4.2`,true)
        .addField("• Nombre d'utilisateurs", `${client.users.size}`,true)
        .addField("• Nombre de commandes", `65`,true)
        .addField("• Usage du CPU", `${Math.ceil(v)}%`,true)
        .addField("• Version", `Bêta`,true)
        .addField("• NodeJS", `${process.version}`,true)  
        .addField("• Nombre de serveurs", `${client.guilds.size}`,true)
        .addField("• Nombres de salons", `${client.channels.size}`,true)
        .addField("• Développeur", `UnePoussièreDeTigre.. 💔 (Tigrou)#0001\nHurting men.#7075`,true)
        .setTimestamp()
        .setColor("#3377ff")
        .setFooter("© Zébra", client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        msg.channel.send(help_embed) 
    })  
}

module.exports.help = {
    name : "debug",
    alliase: [],
    type: "bot",
}