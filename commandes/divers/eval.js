const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, msg) => {

    let code = msg.content.split(" ").slice(1).join(" ")

    if(msg.author.id === '315237321085550604' || msg.author.id === "439859467803164672" || msg.author.id === "581822015258886144") {//return msg.channel.send("Erreur: autorisation refusé"); 
        try {
            let ev = eval(code);
            let str = util.inspect(ev, {
                depth: 1
            });

            str = `${str.replace(new RegExp(`${client.token}`, "g"), "token")}`;

            if(str.length > 1900) {
                str = str.substr(0, 1900);
                str = str + "...";
            }

            msg.channel.send(`✅ Evaluation réussi:\n\`\`\`JS\n${str}\`\`\``);
        } catch (err) {
            msg.channel.send(`❌ Evaluation échoué:\n\`\`\`JS\n${err}\`\`\``);
        }
    }
}


module.exports.help = {
    name : "eval",
    alliase: [],
    type: "bot",
}
