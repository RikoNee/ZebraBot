const Discord = require("discord.js");

module.exports.run = async (client, message) => {

    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous ne pouvez pas utiliser la commande de fermeture en dehors d'un canal de ticket.`);

    message.channel.send(`Êtes-vous sûr? Une fois confirmé, vous ne pouvez plus annuler cette action. !\nPour  confirmer, Faite \`-tconfirm\`. Cette annulation expire dans 10 secondes et sera annulé.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-tconfirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit("La fermeture du ticket a expiré, le ticket n'a pu être fermé.").then(m2 => {
              m2.delete();
          }, 3000);
        });
    }); 
}

module.exports.help = {
    name : "tclose",
    alliase: [],
    type: "bot",
}
