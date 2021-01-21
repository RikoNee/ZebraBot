const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

  const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
  msg.delete()
  let xoargs = msg.content.split(" ").slice(1);
  let xo03 = xoargs.join(" ")
  var xo02 = msg.guild.channels.find(ch => ch.id === guildConf.interserver);
  if(!xo02) {
    if (!msg.member.hasPermissions('ADMINISTRATOR')) return msg.channel.send("Erreur: Un administrateur doit faire cette commande pour pouvoir activer cette fonction.")
    await msg.reply("Erreur `channel`: channel interserver introuvable")
    await msg.channel.send('Création du channel...')
    await msg.guild.createChannel('zebrainterserver', 'text')
    await msg.channel.send('Channel zebrainterserver créer.')
    await msg.channel.send('Vous pouvez modifier le nom du channel et refaire la commande dans celui ci.')
    let channel = msg.guild.channels.find("name", "zebrainterserver")
    await client.settings.set(msg.guild.id, channel.id, "interserver")
    return
  } else {
    if(msg.channel.id !== guildConf.interserver) return msg.reply("Commande à effectuer dans " + client.channels.get(guildConf.interserver).name)
    if(!xo03 && !msg.attachments.first()) return msg.reply("Merci d'écrire un message à envoyer à la globalité des discords.") 
    if (!msg.attachments.first()) {
      client.guilds.forEach(g => client.channels.filter(channel => channel.id === `${client.settings.getProp(g.id, "interserver")}`).forEach(channel => channel.send({embed: {
        "color": 0x88FFCC,
        "fields": [{
          "name": "Serveur:",
          "value": `[${msg.guild.name}](https://discord.gg/bKRMEFX)`,
          "inline": true
        },
        {
          "name": "Utilisateur :",
          "value": `[${msg.author.username}#${msg.author.discriminator}](https://discordapp.com/channels/@me/${msg.author.id})`,
          "inline": true
        },
        {
          "name": "Message:",
          "value": xo03 ,
          "inline": true
        },
        {
          "name": "Membres:",
          "value": `<:enligne:591479593689677835> ${msg.guild.members.filter(m => m.presence.status === 'online').size} <:absent:591479594922541057> ${msg.guild.members.filter(m => m.presence.status === 'idle').size} <:npd:591479586198519854> ${msg.guild.members.filter(m => m.presence.status === 'dnd').size}\n<:stream:591479593261858817> ${msg.guild.members.filter(m => m.presence.status === 'streaming').size} <:horsligne:591479600534650890> ${msg.guild.members.filter(m => m.presence.status === 'offline').size} • ${msg.guild.memberCount} membre(s)`,
          "inline": true
        }
        ],
        "timestamp": new Date(),
        "footer": {
        "icon_url": msg.author.avatarURL,
        "text": `© Zébra • ${client.guilds.size} serveur(s)` 
        }
      }})))
    } else if(!xo03 && msg.attachments.first()) {
      client.guilds.forEach(g => client.channels.filter(channel => channel.id === `${client.settings.getProp(g.id, "interserver")}`).forEach(channel => channel.send({embed: {
        "image": {
          "url": msg.attachments.first().proxyURL
        },
        "color": 0x88FFCC,
        "fields": [{
          "name": "Serveur:",
          "value": `[${msg.guild.name}](https://discord.gg/bKRMEFX)`,
          "inline": true
        },
        {
          "name": "Utilisateur :",
          "value": `[${msg.author.username}#${msg.author.discriminator}](https://discord.gg/bKRMEFX)`,
          "inline": true
        },
        {
          "name": "Membres:",
          "value": `<:enligne:591479593689677835> ${msg.guild.members.filter(m => m.presence.status === 'online').size} <:absent:591479594922541057> ${msg.guild.members.filter(m => m.presence.status === 'idle').size} <:npd:591479586198519854> ${msg.guild.members.filter(m => m.presence.status === 'dnd').size}\n<:stream:591479593261858817> ${msg.guild.members.filter(m => m.presence.status === 'streaming').size} <:horsligne:591479600534650890> ${msg.guild.members.filter(m => m.presence.status === 'offline').size} • ${msg.guild.memberCount} membre(s)`,
          "inline": true
        }
        ],
        "timestamp": new Date(),
        "footer": {
        "icon_url": msg.author.avatarURL,
        "text": `© Zébra • ${client.guilds.size} serveur(s)` 
        }
      }
    })))
  } else {
    client.guilds.forEach(g => client.channels.filter(channel => channel.id === `${client.settings.getProp(g.id, "interserver")}`).forEach(channel => channel.send({embed: {
      "image": {
        "url": msg.attachments.first().proxyURL
      },
      "color": 0x88FFCC,
      "fields": [{
        "name": "Serveur:",
        "value": `[${msg.guild.name}](https://discord.gg/bKRMEFX)`,
        "inline": true
      },
      {
        "name": "Utilisateur :",
        "value": `[${msg.author.username}#${msg.author.discriminator}](https://discord.gg/bKRMEFX)`,
        "inline": true
      },
      {
        "name": "Message:",
        "value": xo03 ,
        "inline": true
      },
      {
        "name": "Membres:",
        "value": `<:enligne:591479593689677835> ${msg.guild.members.filter(m => m.presence.status === 'online').size} <:absent:591479594922541057> ${msg.guild.members.filter(m => m.presence.status === 'idle').size} <:npd:591479586198519854> ${msg.guild.members.filter(m => m.presence.status === 'dnd').size}\n<:stream:591479593261858817> ${msg.guild.members.filter(m => m.presence.status === 'streaming').size} <:horsligne:591479600534650890> ${msg.guild.members.filter(m => m.presence.status === 'offline').size} • ${msg.guild.memberCount} membre(s)`,
        "inline": true
      }
      ],
      "timestamp": new Date(),
      "footer": {
      "icon_url": msg.author.avatarURL,
      "text": `© Zébra • ${client.guilds.size} serveur(s)` 
      }
    }
  })))
  }
}
}

module.exports.help = {
    name : "interserver",
    alliase: [],
    type: "bot",
}
