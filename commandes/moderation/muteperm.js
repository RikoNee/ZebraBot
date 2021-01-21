const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('erreur `PERMISSION`: Permission manquantes.')
    let role = msg.guild.roles.find('name', 'ZébraMute')
    if (!msg.guild.roles.get(role.id)) {
        msg.guild.createRole({name: "ZébraMute", permissions: ['VIEW_CHANNEL']})
      }
      msg.guild.channels.map(c => c.overwritePermissions(msg.guild.roles.get(role.id), {VIEW_CHANNEL: true, MANAGE_CHANNELS: false, SEND_MESSAGES: false, SEND_TTS_MESSAGES: false, KICK_MEMBERS: false, BAN_MEMBERS: false, MANAGE_WEBHOOKS: false, MANAGE_EMOJIS: false, SPEAK: false, MUTE_MEMBERS: false, ATTACH_FILES: false, MOVE_MEMBERS: false, USE_VAD: true, MANAGE_NICKNAMES: false, MANAGE_ROLES: false, MENTION_EVERYONE: false, VIEW_AUDIT_LOG: false, MANAGE_GUILD: false, ADD_REACTIONS: false, EMBED_LINKS: false, MANAGE_MESSAGES: false, USE_EXTERNAL_EMOJIS: false, READ_MESSAGE_HISTORY: true, CREATE_INSTANT_INVITE: true, SPEAK: false, DEAFEN_MEMBERS: false, PRIORITY_SPEAKER: false}))
    
}

module.exports.help = {
    name : "muteperm",
    alliase: [],
    type: "bot",
}
