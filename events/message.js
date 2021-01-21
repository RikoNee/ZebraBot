module.exports = async (client, msg) => {
  const fs = require('fs')

  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings);
  if (!msg.content.startsWith(guildConf.prefix)) return; 
  //if (msg.author.id !== "439859467803164672" && msg.author.id !== "315237321085550604") return msg.channel.send("Maintenance en cours.\nRaison : `Latence élevé et autres`\nFin de la maintenance: `Inderterminé`.\nVeuillez vous rendre sur le serveur support pour plus d'informations (vous le trouverez sur les site de bot discord ou sur les sites de sereur discord)\n\nMerci de votre compréhension.")
    let args = msg.content.slice(guildConf.prefix.length).trim().split(' ')
    let cmd = args.shift().toLowerCase()
    let command;
    if (client.commands.has(cmd)) {
      command = client.commands.get(cmd)
    } else {
      command = client.commands.get(client.alliase.get(cmd))
    }
    command.run(client, msg, args)
    //let cmd = msg.content.slice(guildConf.prefix.length).split(' ').shift().toLowerCase(); 
    //let args = msg.content.split(" ").slice(1)
    //let commande = client.commands.get(cmd);
    //if(commande) commande.run(client, msg, args);
}