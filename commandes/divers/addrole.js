const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const guildConf = client.settings.ensure(message.guild.id, client.defaultSettings);
  if(!message.member.hasPermission("MANAGE_ROLES") && !message.member.roles.some(role => role.name === guildConf.setmod)) return message.channel.send("Erreur `permission manquant`: ADMINISTRATOR");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Erreur `mention`: " + client.config.BOT_PREFIX + "addrole <@mention> <rôle>");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Erreur `rôle`: " + client.config.BOT_PREFIX + "addrole <@mention> <rôle>");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Erreur `rôle`: Impossible de trouver le rôle.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("`Erreur `rôle`: Rôle déjà attribué.");
  await(rMember.addRole(gRole.id));

  try{
    await message.channel.send(`<a:creation:579716661108670465> Rôle ajouté avec succès.`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Le mec a désac ses mp`)
  }
}

module.exports.help = {
  name: "addrole",
  alliase: [],
  type: "bot",
}