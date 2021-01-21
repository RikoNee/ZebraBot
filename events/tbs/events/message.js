module.exports = async (client, msg) => {
  const fs = require('fs')

  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  if (!msg.content.startsWith(client.config.prefix)) return; 
  //if (msg.author.id !== "439859467803164672" && msg.author.id !== "315237321085550604")
    let cmd = msg.content.slice(2).split(' ').shift().toLowerCase(); 
    let args = msg.content.split(" ").slice(1)
    let commande = client.commands.get(cmd);
    if(commande) commande.run(client, msg, args);
}