const Discord = require("discord.js");

module.exports.run = async (client, message) => {


    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support")) return message.channel.send("Ce serveur ne possède pas de rôle `Support`. Le ticket ne sera donc pas ouvert. \n Si vous êtes un administrateur, créez-en un avec ce nom et donnez-le aux utilisateurs qui devraient pouvoir voir les tickets.");
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`Vous avez déjà un ticket ouvert.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Votre ticket à bien été créé, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username} !`, `Essayez d’expliquer pourquoi vous avez ouvert ce ticket avec le plus de détails possible. Notre Support sera bientôt là pour vous aider.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
    
}

module.exports.help = {
    name : "ticket",
    alliase: [],
    type: "bot",
}
