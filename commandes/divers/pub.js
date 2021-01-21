const Discord = require("discord.js");
const cooldown = new Set();
function msToHMS( ms ) {
  // 1- Convert to seconds:
  var seconds = ms / 1000;
  // 2- Extract hours:
  var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
  // 4- Keep only seconds not extracted to minutes:
  seconds = seconds % 60;
  return `${hours}H ${minutes}M ${Math.ceil(seconds)}S`
}
let timeToArrive = 0;
let timeNow = 0;

module.exports.run = async (client, msg) => {

  if (msg.author.id === "439859467803164672" || msg.author.id === "315237321085550604") {
    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
    msg.delete()
    let xoargs = msg.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = msg.guild.channels.find(ch => ch.id === guildConf.interserver);
    let i = 0
    if(!xo02) {
      msg.reply("Erreur `channel`: channel interserver introuvable")
      msg.channel.send('Création du channel...')
      msg.guild.createChannel('zebrainterserver', 'text')
      msg.channel.send('Channel zebrainterserver créer.')
      let x = setInterval(() => {
        if (i === 1) {clearInterval(x)} else {
          msg.channel.send('Vous pouvez modifier le nom du channel et refaire la commande dans celui ci.')
          let channel = msg.guild.channels.find("name", "zebrainterserver")
          client.settings.set(msg.guild.id, channel.id, "interserver")
          i = i + 1
        }
      }, 1000)
      return
    }
    if(msg.channel.id !== guildConf.interserver) return msg.reply("Commande à effectuer dans " + client.channels.get(guildConf.interserver).name)
    if(!xo03) return msg.reply("Merci d'écrire votre pub à la globalité des discords.") 
    msg.channel.createInvite().then(invite => client.guilds.forEach(g => client.channels.filter(channel => channel.id === `${client.settings.getProp(g.id, "interserver")}`).forEach(channel => channel.send({embed: {
      color: 0x88FFCC,
      fields: [{
        name: "Serveur:",
        value: `[${msg.guild.name}](https://discord.gg/${invite.code})`,
        inline: true
      },
      {
        name: "Utilisateur :",
        value: `[${msg.author.username}#${msg.author.discriminator}](https://discordapp.com/channels/@me/${msg.author.id})`,
        inline: true
      },
      {
        name: "Message:",
        value: xo03 ,
      },
      {
        name: "Invitation:",
        value: `https://discord.gg/${invite.code}`,
        inline: true
      },
      {
        name: "Membres:",
        value: `<:enligne:591479593689677835> ${msg.guild.members.filter(m => m.presence.status === 'online').size} <:absent:591479594922541057> ${msg.guild.members.filter(m => m.presence.status === 'idle').size} <:npd:591479586198519854> ${msg.guild.members.filter(m => m.presence.status === 'dnd').size}\n<:stream:591479593261858817> ${msg.guild.members.filter(m => m.presence.status === 'streaming').size} <:horsligne:591479600534650890> ${msg.guild.members.filter(m => m.presence.status === 'offline').size} • ${msg.guild.memberCount} membre(s)`,
        inline: true
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: msg.author.avatarURL,
      text: `© Zébra • ${client.guilds.size} serveur(s) | Pub` 
      }
    }}))))
  } else {
    if (cooldown.has(msg.author.id)) {
      timeNow = new Date().getTime()
      msg.channel.send("Vous pouvez refaire cette commande dans " + `\`${msToHMS(timeToArrive - timeNow)}\``);
    } else {
      const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
      cooldown.add(msg.author.id)
      timeToArrive = new Date().getTime() + 14400000
      msg.delete()
      let xoargs = msg.content.split(" ").slice(1);
      let xo03 = xoargs.join(" ")
      var xo02 = msg.guild.channels.find(ch => ch.id === guildConf.interserver);
      let i = 0
      if(!xo02) {
        msg.reply("Erreur `channel`: channel interserver introuvable")
        msg.channel.send('Création du channel...')
        msg.guild.createChannel('zebrainterserver', 'text')
        msg.channel.send('Channel zebrainterserver créer.')
        let x = setInterval(() => {
          if (i === 1) {clearInterval(x)} else {
            msg.channel.send('Vous pouvez modifier le nom du channel et refaire la commande dans celui ci.')
            let channel = msg.guild.channels.find("name", "zebrainterserver")
            client.settings.set(msg.guild.id, channel.id, "interserver")
            i = i + 1
          }
        }, 1000)
        return
      }
      if(msg.channel.id !== guildConf.interserver) return msg.reply("Commande à effectuer dans " + client.channels.get(guildConf.interserver).name)
      if(!xo03) return msg.reply("Merci d'écrire un message à envoyer à la globalité des discords.") 
      msg.channel.createInvite().then(invite => client.guilds.forEach(g => client.channels.filter(channel => channel.id === `${client.settings.getProp(g.id, "interserver")}`).forEach(channel => channel.send({embed: {
        color: 0x88FFCC,
        fields: [{
          name: "Serveur:",
          value: `[${msg.guild.name}](https://discord.gg/${invite.code})`,
          inline: true
        },
        {
          name: "Utilisateur :",
          value: `[${msg.author.username}#${msg.author.discriminator}](https://discordapp.com/channels/@me/${msg.author.id})`,
          inline: true
        },
        {
          name: "Message:",
          value: xo03 ,
        },
        {
          name: "Invitation:",
          value: `https://discord.gg/${invite.code}`,
          inline: true
        },
        {
          name: "Membres:",
          value: `<:enligne:579429802487054387> ${msg.guild.members.filter(m => m.presence.status === 'online').size} <:absent:579429802742906904> ${msg.guild.members.filter(m => m.presence.status === 'idle').size} <:npd:579429802784849939> ${msg.guild.members.filter(m => m.presence.status === 'dnd').size}\n<:stream:579429802616946689> ${msg.guild.members.filter(m => m.presence.status === 'streaming').size} <:horsligne:579429802696507443> ${msg.guild.members.filter(m => m.presence.status === 'offline').size} • ${msg.guild.memberCount} membre(s)`,
          inline: true
        }
        ],
        timestamp: new Date(),
        footer: {
        icon_url: msg.author.avatarURL,
        text: `© Zébra • ${client.guilds.size} serveur(s) | Pub` 
        }
      }}))))
      setTimeout(() => {
        cooldown.delete(msg.author.id)
      }, 1000*60*60*4)
    }
  }
}

module.exports.help = {
    name : "pub",
    alliase: [],
    type: "bot",
}
