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
        let uptime = `__${Math.floor(days)}__ jours __${Math.floor(hours)}__ heures __${Math.floor(minutes)}__ minutes  __${Math.floor(seconds)}__ secondes`
    var embedbot = new Discord.RichEmbed()
        .setDescription("**• Informations du bot •**")
        .addField("👑 Créateurs →", "- ``UnePoussièreDeTigre.. 💔 (Tigrou)#0001``\n- ``Hurting men.#7075``", true)
        .addField("⏲ Uptime →", `${uptime}`,true)
        .addField("📰 Informations →", `- \`ID\` → ${client.user.id}\n- \`Langage\` → Français | FR | French\n- \`Préfix(Par Défaut)\` → -`, true)
        .addField("📊 Statistiques →", "- `Serveurs` → "+client.guilds.size+"\n"+"- `Utilisateurs` → "+client.users.size+"\n"+"- `Salons` → "+client.channels.size+"\n"+"- `Ping` → "+Math.round(client.ping)+" ms", true)
        .setColor("0x81DAF5")
        .setFooter("© Zébra'Bot")
        .setThumbnail(msg.author.avatarURL)
    msg.channel.send(embedbot)


    })   
}

module.exports.help = {
    name : "infobot",
    alliase: [],
    type: "bot",
}
