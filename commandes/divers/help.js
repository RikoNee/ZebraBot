const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
  const args = msg.content.split(/\s+/g);

   msg.delete()
   let help_embed = new Discord.RichEmbed()
  .setTitle("Liste de mes commandes:")
  .addField("**⚠  • Administration (6)**","`addrole` • `removerole` • `sondage` • `giveaway` • `setconfig` • `config`")
  .addField("**🔧 • Modération (8)**", "`ban` • `mute` • `kick` • `clear` • `unmute` • `unban` • `tempmute` • `slowmode`")
  .addField("**:underage: • NSFW (12)**", "`4k` • `ass` • `bbw` • `boobs` • `cosplays` • `dick` • `fuck` • `suck` • `lick` • `pussy` • `anal` • `snapchat`")
  .addField("**🎵 • Musique (15)**", "`play` • `join` • `leave` • `loop` • `moveto` • `nowplaying` • `pause` • `clearmusic` • `queue` • `replaynow` • `resume` • `seek` • `skip` • `skipto` • `volume`")
  .addField("**🎮 • Jeux (2)**", "`fortnite` • `osu`")
  .addField("**📣 • Divers (17)**", "`hug` • `kiss` • `slap` • `cuddle` • `pat` • `poke` • `baka` • `animals` • `infos` • `invite` • `signe` • `interserver`• `neko` • `manga` • `debug` • `pub` • `avatar`")
  .addField("**♨️ • Support (3)**", "Support serveur: `ticket` et `tclose` pour fermer le ticket • Support bot: `support`\n\n[Support](https://discord.gg/bKRMEFX) ► [Invite](https://discordapp.com/oauth2/authorize?client_id=589135392368754772&scope=bot&permissions=1610087935) ► [Paypal](https://paypal.me/paryreverzia) ► [Site](http://www.zebrabot.xyz) ► [Héberger par Neesp](https://neesp.fr)")
  .setTimestamp()
  .setColor("#3377ff")
  .setFooter("© Zébra", client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  msg.channel.send(help_embed)
    
}

module.exports.help = {
    name : "help",
    alliase: [],
    type: "bot",
} 
