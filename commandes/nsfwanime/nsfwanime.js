const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, msg) => {

        let splitMessage = msg.content.split(" ")

            if(splitMessage[1]==="yuri") {
            if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
            const { body } = await superagent.get(`https://nekos.life/api/v2/img/yuri`)
            let yuri_embed = new Discord.RichEmbed()
            .setImage(body.url)
            .setDescription(`[Du mal à afficher l'image ? cliquer içi.](${body.url})`)
            .setColor("0x81DAF5")
            .setFooter("Anime Yuri")
            .setTimestamp()    
            msg.channel.send(yuri_embed)
            return undefined

         } 

            if(splitMessage[1]==="boobs") {
                if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
                const { body } = await superagent.get(`https://nekos.life/api/v2/img/boobs`)
                let boobs_embed = new Discord.RichEmbed()
                .setImage(body.url)
                .setDescription(`[Du mal à afficher l'image ? cliquer içi.](${body.url})`)
                .setColor("0x81DAF5")
                .setFooter("Anime Boobs")
                .setTimestamp()    
                msg.channel.send(boobs_embed)
                return undefined



        }

        if(splitMessage[1]==="anal") {
            if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
            const { body } = await superagent.get(`https://nekos.life/api/v2/img/anal`)
            let boobs_embed = new Discord.RichEmbed()
            .setImage(body.url)
            .setDescription(`[Du mal à afficher l'image ? cliquer içi.](${body.url})`)
            .setColor("0x81DAF5")
            .setFooter("Anime Anal")
            .setTimestamp()    
            msg.channel.send(boobs_embed)
            return undefined



    }

    if(splitMessage[1]==="hentai") {
        if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
        const { body } = await superagent.get(`https://nekos.life/api/v2/img/hentai`)
        let boobs_embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setDescription(`[Du mal à afficher l'image ? cliquer içi.](${body.url})`)
        .setColor("0x81DAF5")
        .setFooter("Anime Hentai")
        .setTimestamp()    
        msg.channel.send(boobs_embed)
        return undefined



    }  
    
    if(splitMessage[1]==="hentaigif") {
        if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
        const { body } = await superagent.get(`https://nekos.life/api/v2/img/Random_hentai_gif`)
        let boobs_embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setDescription(`[Du mal à afficher l'image ? cliquer içi.](${body.url})`)
        .setColor("0x81DAF5")
        .setFooter("Anime Hentai Gif")
        .setTimestamp()    
        msg.channel.send(boobs_embed)
        return undefined



    } 
       
    if(splitMessage[1]==="nekogif") {
        if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
        const { body } = await superagent.get(`https://nekos.life/api/v2/img/nsfw_neko_gif`)
        let boobs_embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setDescription(`[Du mal à afficher l'image ? cliquer içi.](${body.url})`)
        .setColor("0x81DAF5")
        .setFooter("Anime Neko Gif")
        .setTimestamp()    
        msg.channel.send(boobs_embed)
        return undefined



    }
    
    
    if(splitMessage[1]==="pussy") {
        if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
        const { body } = await superagent.get(`https://nekos.life/api/v2/img/pussy`)
        let boobs_embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setColor("0x81DAF5")
        .setFooter("Anime Pussy")
        .setTimestamp()    
        msg.channel.send(boobs_embed)
        return undefined



    } 

    if(splitMessage[1]==="yaoi") {
        if (!msg.channel.nsfw) return msg.channel.send(":underage: Commande NSFW. Veuillez basculer sur un salon NSFW pour utiliser cette commande.")
        const { body } = await superagent.get(`http://zebra-api.tk/api/v1/yaoi`)
        let boobs_embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setColor("0x81DAF5")
        .setFooter("Généré par Zébra-API")
        .setTimestamp()    
        msg.channel.send(boobs_embed)
        return undefined



    } 


}       
    

module.exports.help = {
    name: "anime",
    alliase: [],
    type: "bot",
}

