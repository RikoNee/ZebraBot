const Discord = require("discord.js");

module.exports.run = async (client, message) => {


    message.delete()
    if (!message.mentions.users.size) {
        return message.channel.send(`Avatar de ${message.author.username} : ${message.author.displayAvatarURL}`);
    }

    const avatarList = message.mentions.users.map(user => {
        return `Avatar de ${user.username} : ${user.displayAvatarURL}`;
    });

    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
}         
    

module.exports.help = {
    name: "avatar",
    alliase: [],
    type: "bot",
}
