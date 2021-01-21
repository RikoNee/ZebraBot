const Discord = require("discord.js");
const fs = require('fs')
const ms = require('ms')

module.exports.run = async (client, msg) => {
    msg.channel.send(':wrench: En développement :wrench:')
    /*function verif_s(txt){
        return txt.split('').filter(a => !"s".includes(a.toLowerCase())).length !==0
        }
    function verif_m(txt){
        return txt.split('').filter(a => !"m".includes(a.toLowerCase())).length !==0
        }
    function verif_h(txt){
        return txt.split('').filter(a => !"h".includes(a.toLowerCase())).length !==0
        }
    function verif_d(txt){
        return txt.split('').filter(a => !"d".includes(a.toLowerCase())).length !==0
    }

   msg.delete()
   let splitMessage = msg.content.split(" ")
   let args = splitMessage.slice(2)
   let rmute = args.join(" ").slice(22)
   let muteRoleId = msg.guild.roles.find('name', 'ZébraMute')
   if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(":x: Vous n'avez pas la permission d'utiliser cette commande")
   let mention = msg.mentions.users.first();
   let channel = msg.guild.channels.find('name', 'zebra-log')
   if (!mention) {
     if (!channel) {
     msg.channel.send(`:x: Aucun channel détecté.`)
     msg.channel.send(`<a:charge:579712178991398913> Création du channel ...`)
     msg.guild.createChannel('zebra-log', {
     type: 'text',
     permissionsOverwrites: [{
       id: msg.guild.id,
       deny: ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'MANAGE_ROLES', 'ADD_REACTIONS', 'VIEW_AUDiT_LOG', 'USE_EXTERNAL_EMOJI', 'KICK_MEMBERS', 'BAN_MEMBERS'],
       allow: ['VIEW_CHANNEL']
     }]
   })
   msg.channel.send(`<a:creation:579716661108670465> Salon crée.`)
       return
   } else {
     msg.channel.send('Aucune personne mentionné.')
       return
     }  
   }
   if (!channel) {
     msg.channel.send(`:x: Aucun channel détecté.`)
     msg.channel.send(`<a:charge:579712178991398913> Création du channel ...`)
     msg.guild.createChannel('zebra-log', {
     type: 'text',
     permissionsOverwrites: [{
       id: msg.guild.id,
       deny: ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'MANAGE_ROLES', 'ADD_REACTIONS', 'VIEW_AUDiT_LOG', 'USE_EXTERNAL_EMOJI', 'KICK_MEMBERS', 'BAN_MEMBERS'],
       allow: ['VIEW_CHANNEL']
     }]
   })
   }
   if (!muteRoleId) {
       msg.guild.createRole({name: 'ZébraMute', permissions: ['VIEW_CHANNEL']})
   }
   if (splitMessage[2])
   if (!rmute) return msg.channel.send('Vous n\'avez pas préciser de raisons')
   if (verif_s(splitMessage[2]) === true||verif_m(splitMessage[2]) === true||verif_h(splitMessage[2]) === true||verif_d(splitMessage[2]) === true) return msg.channel.send('Votre temps de mute ne contient pas une des ces valeurs: `s, m, h, d`')
   let time = 0
   if (verif_s(splitMessage[2]) === false) {time = splitMessage[2]}
   if (verif_m(splitMessage[2]) === false) {time = splitMessage[2] * 60}
   if (verif_h(splitMessage[2]) === false) {time = splitMessage[2] * 60 * 60}
   if (verif_d(splitMessage[2]) === false) {time = splitMessage[2] * 60 * 60 * 24}
   msg.guild.member(mention).addRole(muteRoleId)
   msg.delete()
   let log_embed = new Discord.RichEmbed()
     .setTitle('Log mute')
     .setColor('#FF0000')
     .setDescription("Informations sur la commande 'mute' effectué")
     .addField('Auteur', msg.author.username, true)
     .addField('Membre muté', mention.username, true)
     .addField('Raison', rmute)
     .setFooter('© Zébra\'Bot', client.user.avatarURL)
     .setTimestamp()
     msg.guild.channels.find("name", "zebra-log").sendEmbed(log_embed)

     let muteTiemout = setTiemout(() => {
        msg.guild.member(mention).removeRole(muteRoleId)
        clearTimeout(muteTiemout)
     }, ms(time))*/
}

module.exports.help = {
    name : "tempmute",
    alliase: [],
    type: "bot",
}