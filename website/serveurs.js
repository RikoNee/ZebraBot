const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');

router.get("/:guildID", CheckAuth, (req, res) => {
    let serv = req.bot.guilds.get(req.params.guildID);
    if (!serv) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${req.bot.user.id}&scope=bot&permissions=-1&guild_id=${req.params.guildID}`);
    if(!req.bot.guilds.get(req.params.guildID).members.get(req.user.id).hasPermission("MANAGE_GUILD")) return res.redirect("/dashboard");
      res.render("guild.ejs", {
        status: (req.isAuthenticated() ? `${req.user.username}#${req.user.discriminator}` : "Se connecter"),
        client: req.bot.user,
        user: req.user,
        avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
        guild: serv,
      });
})
    .post("/:guildID", CheckAuth, async function(req, res) { 
        if (req.body.send_MESSAGE === undefined) {
          let channelLogs = req.body.channelLogs
          if(!req.body.channelLogs || req.body.channelLogs === "NOT_SET") return res.send("Id channel manquant")
          if (!req.bot.guilds.get(req.params.guildID).channels.find("id", req.body.channelLogs)) return res.send("Id incorrect")
          if (req.body.channelLogs === "off") {channelLogs = "off"}
          await req.bot.settings.set(req.params.guildID, channelLogs, "logs")
        } else {
          if(!req.body.send_CHANNELID || req.body.send_CHANNELID === "NOT_SET") return res.send("Erreur, pas de salon spécifié");
          if(!req.body.send_MESSAGE || req.body.send_MESSAGE.length === 0) return res.send("Erreur, pas de message spécifié");
          await req.bot.guilds.get(req.params.guildID).channels.get(req.body.send_CHANNELID).send(req.body.send_MESSAGE);
        }
        await res.redirect(`/serveurs/${req.params.guildID}`);
    });

module.exports = router;