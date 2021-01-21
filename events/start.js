const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    let histoire = new Discord.RichEmbed()
    .setColor("")
    .setTitle("Histoire (1/?)")
    .setDescription("Bientôt")
    msg.channel.send(histoire)
    setTimeout(() => {
        let start_embed = new Discord.RichEmbed()
        .setColor("")
        .setTitle("Début de l'aventure (2/?)")
        .setDescription("Ici débute votre aventure. Vous pourrez choisir entre ces cinq personnage:\n<a:homer:592430901485371392> `Homer`\n<a:marge:592431322111148042> `Marge`\n<a:bart:592431322136576050> `Bart`\n<a:lisa:592431322702676002> `Lisa`\n<a:maggie:592431322115473419> `Maggie`")
        .setTimestamp()
        .setFooter("Réagissez avec un des emoji pour choisir votre personnage")
        msg.channel.send(start_embed).then(async function (message) {
            let homer = client.guilds.get("592412334023114756").emojis.find(e => e.name === "homer")
            let marge = client.guilds.get("592412334023114756").emojis.find(e => e.name === "marge")
            let bart = client.guilds.get("592412334023114756").emojis.find(e => e.name === "bart")
            let lisa = client.guilds.get("592412334023114756").emojis.find(e => e.name === "lisa")
            let maggie = client.guilds.get("592412334023114756").emojis.find(e => e.name === "maggie")
            await message.react(homer)
            await message.react(marge)
            await message.react(bart)
            await message.react(lisa)
            await message.react(maggie)   

            client.on("messageReactionAdd", (reaction, user) => {
                if (user.id === msg.author.id) {
                    let fun = ["", "Ouh punaise !", "Mmmh.", "Vas te faire shampooiner !", "Je vais dans ma chambre.", "*suce sa tétine*"]
                    let fun2;
                    if (reaction.emoji.name === 'homer') {fun2 = fun[1]}
                    if (reaction.emoji.name === 'marge') {fun2 = fun[2]}
                    if (reaction.emoji.name === 'bart') {fun2 = fun[3]}
                    if (reaction.emoji.name === 'lisa') {fun2 = fun[4]}
                    if (reaction.emoji.name === 'maggie') {fun2 = fun[5]}
                    let start2_embed = new Discord.RichEmbed()
                    .setColor("")
                    .setTitle("Personnage choisi (3/?)")
                    .setDescription("Bravo ! Vous incarnez dés a présent " + reaction.emoji.name + " !\n" + fun2 + " ")
                    message.edit(start2_embed)
                } else return
            })
        })
    }, 3000)
}

module.exports.help = {
    name : "start",
    type: "bot",
} 
