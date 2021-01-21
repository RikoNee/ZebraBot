const Discord = require("discord.js");
const fs = require('fs')

module.exports.run = async (client, msg) => {	

	    function isNumber(x) 
{
    return !isNaN(parseFloat(x)) && isFinite(x);
}
	    function is_int(value){
    if((parseFloat(value) == parseInt(value)) && !isNaN(value)){ 
        return true;
    } else {
        return false;
    }
}
	    function aleatoire(min, max) 
{ 
    return (Math.floor((max-min)*Math.random())+min); 
}
    var giveaway = new Discord.RichEmbed()

    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
	    var giveaways = 0;

            let splitMessage = msg.content.split(" ");
            let splitMessage2 = splitMessage.slice(4).join(" ")
            let channel = msg.mentions.channels.first();
            if (!msg.guild.member(msg.author).hasPermission("ADMINISTRATOR") && !msg.member.roles.some(role => role.name === guildConf.setmod))
                return msg.channel.send("Erreur `permission manquante`: ADMINISTRATOR")
            if (!msg.guild.member(client.user).hasPermission("ADMINISTRATOR"))
                return msg.channel.send("Erreur `permission manquante`: ADMINISTRATOR")
            if (!splitMessage[1] && !splitMessage[2] && !splitMessage2)
                return msg.channel.send("Erreur `channel`: " + client.config.BOT_PREFIX + "giveaways <#channel> <temps> <unité de temps> <récompense>")
            if (!channel)
                return msg.channel.send("Erreur `channel`: Channel introuvable.")
            if (!splitMessage[2] && !splitMessage2)
                return msg.channel.send("Erreur `temps`: " + client.config.BOT_PREFIX + "giveaways <#channel> <temps> <unité de temps> <récompense>")
            if (!isNumber(splitMessage[2]))
                return msg.channel.send("Erreur `temps`: l'argument du temps n'est pas un nombre.")
            if (is_int(splitMessage[2]) === false)
                return msg.channel.send("Erreur `temps`: L'argument temps n'est pas un nombre entier.")
            if (!['d', 'h', 'm', 's'].includes(splitMessage[3]))
                return msg.channel.send("Erreur `unité de temps`: " + client.config.BOT_PREFIX + "giveaways <#channel> <temps> <unité de temps> <récompense>\nUnité de temps disponible: `s`, `m`, `h`, `d`")
            if (!splitMessage2)
                return msg.channel.send("Erreur `récompense`: " + client.config.BOT_PREFIX + "giveaways <#channel> <temps> <unité de temps> <récompense>")
            let time = splitMessage[2]
            let rewards = splitMessage2
            giveaway.setColor("#FF0000")
            giveaway.setTitle("🎉 GIVEAWAY 🎉")
            giveaway.setDescription(rewards)
            giveaway.addField("Temps", time + splitMessage[3])
            giveaway.addField("Comment rejoindre:", "Réagis avec 🎉 pour rejoindre ?")
            giveaway.setThumbnail(client.user.avatarURL)
            giveaway.setTimestamp()
            giveaway.setFooter('© Zébra')
            var nbJoin = 1;
            var join = []
            client.channels.get(channel.id).send(giveaway).then(message =>
                {
                    message.react("🎉")
                    client.on("messageReactionAdd", (reaction, user) =>
                    {
                        if (reaction.emoji.name === "🎉" && user.id != client.user.id)
                        {
                            join[nbJoin] = user.username
                            nbJoin = nbJoin + 1;
                        }
                    })
                    client.on("messageReactionRemove", (reaction, user) =>
                    {
                        if (reaction.emoji.name === "🎉" && user.id != client.user.id)
                        {
                            var remove = join.indexOf(user.username);
                            join.splice(remove, remove);
                            nbJoin = nbJoin - 1;
                        }
                    })
                    if (splitMessage[3] === "d")
                    {
                        giveaways = time * 86400;
                    }
                    if (splitMessage[3] === "h")
                    {
                        giveaways = time * 3600;
                    }
                    if (splitMessage[3] === "m")
                    {
                        giveaways = time * 60;
                    }
                    if (splitMessage[3] === "s")
                    {
                        giveaways = time;
                    }
                    var giveawayInterval = setInterval(() =>
                    {
                        giveaways = giveaways - 1;
                        if (giveaways === 0)
                        {
                            var winner = aleatoire(1, nbJoin - 1)
                            if (join[winner] === undefined)
                                return message.edit("Erreur: Pas de gagnant")
                            var finalWinner = join[winner]
                            let winner_embed = new Discord.RichEmbed()
                            .setTitle(rewards)
                            .addField("Gagnant(s):", `${finalWinner}`)
                            .setFooter("Finit", client.user.avatarURL)
                            .setTimestamp()
                            message.edit(winner_embed)
                            clearInterval(giveawayInterval)
                        }
                    }, 1000)
                })

}

module.exports.help = {
    name : "giveaways",
    alliase: [],
    type: "bot",
}
