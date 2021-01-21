const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  //!tempmute @user 1s/m/h/d

  const guildConf = client.settings.ensure(message.guild.id, client.defaultSettings)
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let channel = message.guild.channels.find(ch => ch.id === guildConf.logs)
  if (guildConf.logs === "off") return messagge.channel.send('Aucun rôle n\'est définie.\nVeuillez faire: ' + guildConf.prefix + "setconfig mute <@role>")
  if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.some(role => role.id === guildConf.mod)) return message.channel.send("Vous ne pouvez pas faire cette commande")
  if(!tomute) return message.reply("Impossible de trouver l'utilisateur.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je peux pas mute cette personne.");
  let muterole = message.guild.roles.find(`name`, "ZébraMute");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "ZébraMute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  if (!channel) {
    msg.channel.send(`:x: Aucun channel détecté.`)
    msg.channel.send(`<a:charge:591479598341160994> Création du channel ...`)
    msg.guild.createChannel(guildConf.logs, "text", [{
      id: msg.guild.id,
      deny: ['SEND_MESSAGES'],
      allow: ['VIEW_CHANNEL']
        }])
        msg.channel.send(`<a:creation:579716661108670465> Salon crée.\nVeuillez refaire la commande.`)
    return
    }
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Erreur `temps`: Vous n'avez pas spécifié un temps.");

  await(tomute.addRole(muterole.id));
  let mute_embed = new Discord.RichEmbed()
  .setTitle('Log tempmute')
  .setColor('#FF0000')
  .setDescription("Informations sur la commande 'tempmute' effectué.")
  .addField('Auteur:', message.author.username, true)
  .addField('Membre muté temporairement:', tomute, true)
  .addField('Temps:', ms(ms(mutetime)))
  .setFooter('© Zébra', client.user.avatarURL)
  .setTimestamp()
  message.guild.channels.find(ch => ch.id === guildConf.logs).send(mute_embed)

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    let unmute_embed = new Discord.RichEmbed()
    .setTitle('Log tempmute')
    .setColor('#FF0000')
    .setDescription("Informations sur la commande 'tempmute' effectué.")
    .addField('Auteur:', message.author.username, true)
    .addField('Membre unmuté: ', tomute, true)
    .setFooter('© Zébra', client.user.avatarURL)
    .setTimestamp()
    message.guild.channels.find(ch => ch.id === guildConf.logs).send(unmute_embed)
  }, ms(mutetime));


}

module.exports.help = {
  name: "tempmute",
  alliase: [],
  type: "bot",
}