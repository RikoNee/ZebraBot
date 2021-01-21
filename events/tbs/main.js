const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true
})
const fs = require("fs");
const config = require("./config.json")
const enmap = require("enmap")

client.commands = new Discord.Collection();
client.config = config;
client.db = new enmap({
  name: "beta",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: "deep"
})

const profil = {
  start: 0,
  personnage: "off",
  dollars: 0,
  donuts: 0,
  xp: 0,
  level: 0,
  bois: 0,
  acier: 0,
  pierre: 0,
  clevote: 0,
  boxvote: 0
}

client.profil = profil;


fs.readdir("./commandes/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./events/", (err, files) => {
  if(err) throw err;
  console.log(`Nombre d\'event en chargement ${files.length}`);

  files.forEach((f) => {
    const events = require(`./events/${f}`);
    const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});

client.login(config.token);
module.exports = client;

