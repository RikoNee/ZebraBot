const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true
});
const { PlayerManager } = require('discord.js-lavalink');
client.radio = new Discord.Collection()

let config = require("./config");

const fs = require("fs");

const Enmep = require('enmap')
const { get } = require("snekfetch");
const { Canvas } = require('canvas-constructor')
const snekfetch = require('snekfetch')

/*const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3NjgwOTk3NDY5NzgyMDE4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTU5MzU1MjAyfQ.Ctm0xSFSKwFErzdLGeWhal1qZm4Z39OblWrnhSawths', client);
client.on('ready', () => {
	setInterval(() => {
		dbl.postStats(client.guilds.size);
	}, 360000);
});*/

/*API DIscord Bot List 2*/
/*client.on('ready', async () => {
    const { post } = require('snekfetch')
    const updateBotList = async () => {
    console.log('Updating DBL stats')

    const { body: reply } = await post(`https://discordbotlist.com/api/bots/589135392368754772/stats`)
        .set("Authorization", `Bot f8fc93e804d8b4cb465f5f6eab349a4132523bac725ebefc7d9722848f27c102`)
        .send({
            guilds: client.guilds.size,
            users: client.users.size,
            voice_connections: client.voiceConnections.size
        })

      return (reply)
    }

    const responseFromAPI = await updateBotList()
})*/
/*----------------------*/


client.website = require("./website/dashboard");
client.config = config;
client.commands = new Discord.Collection();
client.alliase = new Discord.Collection();
client.queue = new Map()
client.player = new PlayerManager(client, client.config.LAVALINK.NODES, {
  user: client.config.BOT.ID,
  shards: 0
});
client.settings = new Enmep({
    name: "UltimaNueve",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: "deep"
})

const defaultSettings = {
  prefix: "-",
  joinChannel: "off",
  LinkBvn: "https://cdn.discordapp.com/attachments/580223602880937984/590622998566928389/abstrice.jpg",
  logs: "off",
  interserver: "off",
  LeaveChannel: "off",
  LinkLeave: "https://cdn.discordapp.com/attachments/580223602880937984/590622998566928389/abstrice.jpg",
  langue: "fr",
  autorole: "off",
  mute: "ZébraMute",
  mod: "off",
  colorBvn: "#000000",
  colorPseudo: "#000000",
  colorCercle: "#000000",
  colorMemberCount: "#000000",
  colorLeave: "#000000",
  colorPseudoLeave: "#000000",
  colorCercleLeave: "#000000",
  colorMemberCountLeave: "#000000"
}

client.defaultSettings = defaultSettings;

//client.dbl = dbl;
//client.on("error",()=> console.error("Reconnexion"))

function memberGuild(txt){
  return txt.split('').filter(a => !"{member}".includes(a.toLowerCase())).length !==0
  }
function memberCountGuild(txt){
  return txt.split('').filter(a => !"{memberCount}".includes(a.toLowerCase())).length !==0
  }
 
client.on('guildMemberAdd', async (member) => {
  const guildConf = client.settings.ensure(member.guild.id, client.defaultSettings)
  if (guildConf.autorole === "off") {} else {
    let role = member.guild.roles.find(ch => ch.id === guildConf.autorole)
    if (!role) {} else {
      member.addRole(role).catch(console.error)
    }
  }
    let bvnChannel = member.guild.channels.find(ch => ch.id === guildConf.joinChannel)
    if (!bvnChannel) {} else {
      let bvn = new Canvas(400,200)
      .addImage(await get(`${guildConf.LinkBvn}`).then(async(r) => r.body),0,0,400,200)
      .restore()
      .setColor(`${guildConf.coleurCercle}`)
      .addCircle(200, 40, 35)
      .restore()
      .setTextFont(`24pt kabupaten`)
      .setTextAlign('center')
      .setColor(`${guildConf.coleurBvn}`)
      .addText("BIENVENUE",200,110)
      .restore()
      .setTextFont(`10px Fabian`)
      .setColor(`${guildConf.coleurPseudo}`)
      .addText(member.user.tag.toUpperCase(),200,127)
      .restore()
      .setTextFont(`13px Fabian`)
      .setColor(`${guildConf.coleurMemberCount}`)
      .addText(`Il y a maintenant ${member.guild.memberCount} membres`,200,165)
      .restore()
      .addImage(await snekfetch.get(member.user.displayAvatarURL).then(async(r) => r.body),167,7,70,70,{type:'round',radius:33})
      .toBuffer();
      var attach = new Discord.Attachment(bvn,'bvn.png')
      member.guild.channels.find(ch => ch.id === guildConf.joinChannel).send(attach)
    }
})

client.on("guildMemberRemove", async (member) => {
  const guildConf = client.settings.ensure(member.guild.id, client.defaultSettings)
  let bvnChannel = member.guild.channels.find(ch => ch.id === guildConf.LeaveChannel)
  if (!bvnChannel) {} else {
    let leave = new Canvas(400,200)
    .addImage(await get(`${guildConf.LinkLeave}`).then(async(r) => r.body),0,0,400,200)
    .restore()
    .setColor(`${guildConf.coleurCercleLeave}`)
    .addCircle(200, 40, 35)
    .restore()
    .setTextFont(`24pt kabupaten`)
    .setTextAlign('center')
    .setColor(`${guildConf.coleurLeave}`)
    .addText("AUREVOIR",200,110)
    .restore()
    .setTextFont(`10px Fabian`)
    .setColor(`${guildConf.coleurPseudoLeave}`)
    .addText(member.user.tag.toUpperCase(),200,127)
    .restore()
    .setTextFont(`13px Fabian`)
    .setColor(`${guildConf.coleurMemberCountLeave}`)
    .addText(`Il y a maintenant ${member.guild.memberCount} membres`,200,165)
    .restore()
    .addImage(await snekfetch.get(member.user.displayAvatarURL).then(async(r) => r.body),167,7,70,70,{type:'round',radius:33})
    .toBuffer();
    var attach = new Discord.Attachment(leave,'bvn.png')
    member.guild.channels.find(ch => ch.id === guildConf.LeaveChannel).send(attach)
  }
})

client.on('guildCreate', async function (guild) {
    guild.owner.user.send(`Salut Je m'appelle Zébra'Bot !\nMerci de m'avoir ajouté sur votre serveur \n\nPour voir toute mes commandes fait \`-help\`.\nEn savoir plus sur moi avec \`-infobot\`.\n\n  Pour t'amuser ou envie de te détendre ?\n Rejoint notre serveur discord https://discord.gg/bKRMEFX\n\nVoici ci dessous des informations importantes:\nVeuillez faire -config pour voir vos paramétres serveur.\n-interserver vous créez un channel et sauvegarde automatiquement celui-ci.\nPour la commande -setconfig couleurCercle|couleurPseudo|couleurBvn, veuillez indiquer un format comme suit: "#000000"\n-Pour la baniere de join et de leave quand un membre rejoint, veuillez privilégier la taille qui suit: "400X200"`)
    let ID = guild.id;
    let guildOwner = client.guilds.get('570649567616434206')
    let envoie = guildOwner.channels.get('580120306673385493')
    let msg_embed = new Discord.RichEmbed()
    .setTitle('Discord ajouté')
    .setColor('#5703B1')
    .setDescription('Je suis arrivé dans un nouveau serveur Discord, je suis heureux de servir a un nouveau server Discord')
    .addField('Informations du serveur Discord', `Nom: **${guild.name}**\nID: **${guild.id}**\nCréateur: **${guild.owner}**\nMembres: **${guild.memberCount}**`)
    .setFooter('© Zébra\'Bot')
    .setThumbnail(guild.iconURL)
    .setTimestamp()
    envoie.sendEmbed(msg_embed)
    let muterole = guild.roles.find(`name`, "ZébraMute");
    try{
      muterole = await guild.createRole({
        name: "ZébraMute",
        color: "#000000",
        permissions:[]
      })
      guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
})

client.on('guildDelete', function (guild) {
  let guildOwner = client.guilds.get('570649567616434206')
  let envoie = guildOwner.channels.get('580120306673385493')
  let msg_embed = new Discord.RichEmbed()
  .setTitle('Discord quitté')
  .setColor('#5703B1')
  .setDescription('Je viens de quitter un nouveau serveur Discord, j\'ai été heureux de servir ce serveur Discord...')
  .addField('Informations du serveur Discord', `Nom: **${guild.name}**\nID: **${guild.id}**\nCréateur: **${guild.owner}**\nMembres: **${guild.memberCount}**`)
  .setFooter('© Zébra\'Bot')
  .setThumbnail(guild.iconURL)
  .setTimestamp()
  envoie.sendEmbed(msg_embed)
  client.settings.delete(guild.id)
})

client.on('message', function (msg) {
  if (msg.channel.type !== 'dm') return 
    if (msg.content.startsWith("support")) {
      let splitMessage = msg.content.split(" ")
      if (splitMessage[1] !== "rep") {
        if (msg.channel.type === 'dm') {
          if (msg.author.id === "581822015258886144") return msg.reply("Vous avez été banni de la comande support.")
              let args = splitMessage.slice(1).join(" ")
              if (!args) return msg.reply('Erreur `msg`: ' + 'support <message>\nSi votre ticket sera jugée comme inutile alors vous recevrez un avertissement.')
              let report_embed = new Discord.RichEmbed()
              .setTitle('Report:')
              .setColor('#45b103')
              .setDescription('Ticket support')
              .addField('Auteur:', msg.author.username, true)
              .addField('ID:', msg.author.id, true)
              .addField('Destinataire:', 'Support de ZébraBot', true)
              .addField('Problèmes:', args)
              client.users.get('439859467803164672').send(report_embed)
              client.users.get('315237321085550604').send(report_embed)
        } else {
          msg.channel.send("Veuillez faire cette commande en message privé en indiquant par la suite votre probléme.")
        }
      } else {
        if (msg.author.id === "439859467803164672" || msg.author.id === "315237321085550604") {
          let args = splitMessage.slice(3).join(" ")
          if (!splitMessage[2]) return msg.channel.send('Erreur `ID`: ' + "support rep <ID> <message>")
          if (!args) return msg.channel.send('Erreur `message`: ' + "support rep <ID> <message>")
          let report_embed = new Discord.RichEmbed()
              .setTitle('Report:')
              .setColor('#45b103')
              .setDescription('Ticket support')
              .addField('Auteur:', "Support", true)
              .addField('Réponse:', args)
              client.users.get(splitMessage[2]).send(report_embed)
              client.users.get(msg.author.id).send(report_embed)
        } else {
          msg.channel.send("Vous n'avez pas l'autorisation d'utiliser cette commande.")
        }
      }
    }
})

fs.readdir("./commandes/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});

fs.readdir("./commandes/moderation/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/moderation/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});

fs.readdir("./commandes/divers/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/divers/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});

fs.readdir("./commandes/game/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/game/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});

fs.readdir("./commandes/musique/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/musique/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});


fs.readdir("./commandes/kawai/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/kawai/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});

fs.readdir("./commandes/nsfw/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/nsfw/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
  });
});


fs.readdir("./commandes/nsfwanime/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/nsfwanime/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});

fs.readdir("./commandes/animals/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/animals/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
    commande.help.alliase.forEach(alliase => {
      client.alliase.set(alliase, commande.help.name)
    })
  });
});


fs.readdir("./events/", (err, files) => {
  if(err) throw err;
  console.log(`Nombre d\'event en chargement ${files.length}`);

  files.forEach((f) => {
    const events = require(`./events/${f}`);
    const event = f.split(".")[0];
    client.on(event, events.bind(this, client));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});
client.on("error", console.error);

client.radio.set('nrj',{title:"NRJ",url:"http://185.52.127.132/fr/30001/mp3_128.mp3?origine=ecouterradioenligne",img:"https://upload.wikimedia.org/wikipedia/fr/9/94/NRJ-Quebec.png"})
client.radio.set('funradio',{title:"FunRadio",url:"http://streaming.radio.funradio.fr/fun-1-48-192",img:"https://images-eu.ssl-images-amazon.com/images/I/61SBhLAGLNL.png"})
client.radio.set('skyrock',{title:"SkyRock",url:"http://www.skyrock.fm/stream.php/tunein16_128mp3.mp3",img:"https://www.radio-en-direct.com/i/radio/ecouter-radio-skyrock.png"})
client.radio.set('virgin radio',{title:"Virgin Radio",url:"http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3",img:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_virgin_radio_tv.png"})
client.radio.set('latina',{title:"Latina",url:"http://start-latina.ice.infomaniak.ch/start-latina-high.mp3",img:"https://upload.wikimedia.org/wikipedia/fr/c/c4/Latina_1.jpg"})
client.radio.set('rire & chansons',{title:"Rire & Chansons",url:"http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=fluxradios",img:"https://players.nrjaudio.fm/live-metadata/player/img/player-files/rire/logos/173x173/P_RIRE_Nouvelle_Generation.png"})

client.login(config.BOT_TOKEN);
module.exports = client;
