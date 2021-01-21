const Discord = require("discord.js");
const fs = require('fs')

module.exports.run = async (client, msg) => {
    /*function random(min, max) 
    { 
    return (Math.floor((max-min)*Math.random())+min); 
    }

    const guildConf = client.settings.ensure(msg.guild.id, client.defaultSettings)
    var seconds = 0;
    
        let mort = ["", "a été tué par l'Administrateur", "a été tué par un zombie", "a été tué par un squelette", "a été tué par une claque", "a eu le coeur brisé et s'est tué", "a été tué par un loup", "a été explosé par un terroriste", "a été tué par un autre joueur", `a été fusillé par le systéme du tournoi`, "a pas eu de chance et est mort comme une merde", "a été mis en prison", "a perdu la vie", "a été tué soudainement", "a été tué par cardinal\nraisons: `mauvais programme`", "a été assassiné", "s'est fait écrasé par une voiture", "s'est fait écrasé par un ascenseur", "est mort noyé", "a été décapité", "s'est pendu", "a sauté d'un toit", "s'est étouffé", "est tombé dans un volcan", "s'est tué a mort en se cognant la tête contre un mur", "s'est fait dépecer", "a fait une crise cardiaque", "est mort exsanguiné", "s'est fait électrocuté", "est mort par un autre joueur qui lui est tombé dessus", "s'est fait mordre par un serpent et est mort", "est mort affamé", "est mort assoifé", "est mort crispé", "est mort calciné", "s'est fait démembré"]
        let join = 0;
        let players = ["Liste des participants:"]
        let state = []
        let splitMessage = msg.content.split(" ")
        let splitMessage2 = splitMessage.slice(5).join(" ")
        if (!msg.guild.member(msg.author).hasPermission("ADMINISTRATOR") && !msg.member.roles.some(role => role.name === guildConf.setmod))
            return msg.reply("Erreur `premission manquante`: ADMINISTRATOR")
        if (!splitMessage[1])
            return msg.reply("Erreur `title`: " + client.config.BOT_PREFIX + 'championship <title (1 mot)> <max inscription> <max temps d\'inscription> <unité de temps> <récompense>')
        if (!splitMessage[2])
            return msg.reply("Erreur `max inscription`: " + client.config.BOT_PREFIX + 'championship <title (1 mot)> <max inscription> <max temps d\'inscription> <unité de temps> <récompense>')
        if (!splitMessage[3])
            return msg.reply("Erreur `max temps d'insription`: " + client.config.BOT_PREFIX + 'championship <title (1 mot)> <max inscription> <max temps d\'inscription> <unité de temps> <récompense>')
        if (!splitMessage[4] || !['d', 'h', 'm', 's'].includes(splitMessage[4]))
            msg.reply("Erreur `unité de temps`: " + client.config.BOT_PREFIX + 'championship <title (1 mot)> <max inscription> <max temps d\'inscription> <unité de temps> <récompense>\nUnité de temps disponible: `d (jours)`, `h (heures)`, `m (minutes)`, `s (secondes)`')
        if (!splitMessage2)
            return message.reply("Erreur `récompense`: " + client.config.BOT_PREFIX + 'championship <title (1 mot)> <max inscription> <max temps d\'inscription> <unité de temps> <récompense>')
        var tournoi_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Tournoi " + splitMessage[1])
        .setDescription("Tournoi ouvert !")
        .addField("Maximum de joueur", splitMessage[2] + " (" + join + "/" + splitMessage[2] + ")")
        .addField("Temp avant fermeture des inscriptions", splitMessage[3] + splitMessage[4])
        .addField("récompense", splitMessage2)
        .addField("Comment rejoindre", "Réagis avec 🎟 pour rejoindre")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        //.setFooter('')
        msg.channel.send(tournoi_embed).then(message =>
            {
                message.react("🎟")
                client.on("messageReactionAdd", (reaction, user) =>
                {
                    if (reaction.emoji.name === "🎟" && user.id != client.user.id)
                    {
                        if (join != splitMessage[2])
                        {
                            join+=1
                            players.push(user)
                            var tournoiJoin_embed = new Discord.RichEmbed()
                            .setColor("#FF0000")
                            .setTitle("Tournoi " + splitMessage[1])
                            .setDescription("Tournoi ouvert !")
                            .addField("Maximum de joueur", splitMessage[2] + " (" + join + "/" + splitMessage[2] + ")")
                            .addField("Temps avant fermeture des inscriptions", splitMessage[3] + splitMessage[4])
                            .addField("Récompense", splitMessage2)
                            .addField("Comment rejoindre", "Réagis avec 🎟 pour rejoindre")
                            .setThumbnail(client.user.avatarURL)
                            .setTimestamp()
                            //.setFooter('')
                            message.edit(tournoiJoin_embed)
                            if (join == splitMessage[2])
                            {
                                var tournoiJoin4_embed = new Discord.RichEmbed()
                                .setColor("#FF0000")
                                .setTitle("Tournoi " + splitMessage[1])
                                .setDescription("Tournoi fermé !")
                                .addField("Maximum de joueur", splitMessage[2] + " (" + join + "/" + splitMessage[2] + ")")
                                .addField("Temps avant fermeture des inscriptions", splitMessage[3] + splitMessage[4])
                                .addField("Récompense", splitMessage2)
                                .addField("Comment rejoindre", "Réagis avec 🎟 pour rejoindre")
                                .setThumbnail(client.user.avatarURL)
                                .setTimestamp()
                                //.setFooter('')
                                message.edit(tournoiJoin4_embed)
                            }
                        }
                        else
                        {
                            var tournoiJoin3_embed = new Discord.RichEmbed()
                            .setColor("#FF0000")
                            .setTitle("Tournoi " + splitMessage[1])
                            .setDescription("Tournoi fermé !")
                            .addField("Maximum de joueur", splitMessage[2] + " (" + join + "/" + splitMessage[2] + ")")
                            .addField("Temps avant fermeture des inscriptions", splitMessage[3] + splitMessage[4])
                            .addField("Récompense", splitMessage2)
                            .addField("Comment rejoindre", "Réagis avec 🎟 pour rejoindre")
                            .setThumbnail(client.user.avatarURL)
                            .setTimestamp()
                            //.setFooter('')
                            message.edit(tournoiJoin3_embed)
                        }
                    }
                })
                client.on("messageReactionRemove", (reaction, user) =>
                {
                    if (reaction.emoji.name === "🎟" && user.id != client.user.id)
                    {
                        if (join != splitMessage[2])
                        {
                            var remove = players.indexOf(user);
                            players.splice(remove, remove);
                            players.pop(user)
                            join-=1
                            var tournoiLeave_embed = new Discord.RichEmbed()
                            .setColor("#FF0000")
                            .setTitle("Tournoi " + splitMessage[1])
                            .setDescription("Tournoi ouvert !")
                            .addField("Maximum de joueur", splitMessage[2] + " (" + join + "/" + splitMessage[2] + ")")
                            .addField("Temps avant fermeture des inscriptions", splitMessage[3] + splitMessage[4])
                            .addField("Récompense", splitMessage2)
                            .addField("Comment rejoindre", "Réagis avec 🎟 pour rejoindre")
                            .setThumbnail(client.user.avatarURL)
                            .setTimestamp()
                            //.setFooter('')
                            message.edit(tournoiLeave_embed)
                        }
                        else
                        {
                            var tournoiLeave2_embed = new Discord.RichEmbed()
                            .setColor("#FF0000")
                            .setTitle("Tournoi " + splitMessage[1])
                            .setDescription("Tournoi fermé !")
                            .addField("Maximum de joueur", splitMessage[2] + " (" + join + "/" + splitMessage[2] + ")")
                            .addField("Temps avant fermeture des inscriptions", splitMessage[3] + splitMessage[4])
                            .addField("Récompense", splitMessage2)
                            .addField("Comment rejoindre", "Réagis avec 🎟 pour rejoindre")
                            .setThumbnail(client.user.avatarURL)
                            .setTimestamp()
                            //.setFooter('')
                            message.edit(tournoiLeave2_embed)
                        }
                    }
                })
            })
        if (splitMessage[4] === "d")
        {
            seconds = 15 * 86400
        }
        if (splitMessage[4] === "h")
        {
            seconds = splitMessage[3] * 3600
        }
        if (splitMessage[4] === "m")
        {
            seconds = splitMessage[3] * 60
        }
        if (splitMessage[4] === "s")
        {
            seconds = splitMessage[3] * 1
        }
        var tournoiInterval = setInterval(() =>
        {
            seconds = seconds - 1;
            if (seconds === 0)
            {
                state[1] = "on"
                clearInterval(tournoiInterval)
                if (players[2] === undefined) return msg.channel.send("C'est impossible de lancer le tournoi tout seul")
                let participant_embed = new Discord.RichEmbed()
                .setDescription(players.map(user => user + "\n"))
                msg.channel.send(participant_embed)
                    var mortInterval = setInterval(() =>
                    {
                        join = join - 1;
                        var generateRandom = random(1, join + 2)
                        var causeMort = random(1, mort.length)
                        msg.channel.send("**" + players[generateRandom] + " " + mort[causeMort] + "**")
                        players.splice(generateRandom, generateRandom);
                        if (join === 1)
                        {
                            clearInterval(mortInterval)
                            msg.channel.send("Félicitation **" + players[1] + "**, tu gagne le tournoi !")
                        }
                    }, 10000)  
            }
        }, 1000) */
    }

    module.exports.help = {
        name : "championship",
        alliase: [],
        type: "bot",
    }