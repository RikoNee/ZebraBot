const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
        const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
        let channel = msg.guild.channels.find(ch => ch.id === guildConf.sondage)
        if (!msg.member.hasPermission('MANAGE_MESSAGES') && !msg.member.roles.some(role => role.id === guildConf.mod)) return msg.channel.send("Erreur `permission manquante`: MANAGE_MESSAGES")
        if (guildConf.sondage === "off") return msg.channel.send('Veuillez faire'+ client.config.BOT_PREFIX + 'sondage pour configurer votre channel `sondage`.')
        if (!channel) {
          let i = 0;
          msg.channel.send(`:x: Aucun channel détecté.`)
          msg.channel.send('<a:charge:579712178991398913> Création du channel ...')
          msg.guild.createChannel("sondage", "text", [{
            id: msg.guild.id,
            deny: ['SEND_MESSAGES'],
            allow: ['VIEW_CHANNEL']
        }])
        let x = setInterval(() => {
          if (i === 1) {clearInterval(x)} else {
            let Channel2 = msg.guild.channels.find("name", "sondage")
            client.settings.set(msg.guild.id, Channel2.id, "sondage")
            msg.channel.send('<a:creation:579716661108670465> Salon crée.\nVous pouvez modifier son nom et refaire la commande.')
            i = i + 1          }
        }, 1000)
        return
        } else {
          let args = msg.content.split(" ").slice(1);
          let thingToEcho = args.join(" ")
          if (!thingToEcho) return msg.channel.send('Erreur `message`: la description du sondage ne peut pas être vide.')
          msg.delete();
          var embed = new Discord.RichEmbed()
              .setDescription("Sondage")
              .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
              .setColor("0xB40404")
              .setFooter("© Zébra", client.user.avatarURL)
              .setTimestamp()
          msg.guild.channels.find("id", guildConf.sondage).send(embed)
          .then(function (message) {
              message.react("✅")
              message.react("❌")
          }).catch(function() {
          });
        }
    
}

module.exports.help = {
    name : "sondage",
    alliase: [],
    type: "bot",
}
