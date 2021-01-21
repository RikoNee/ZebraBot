module.exports.run = async (client, message) => {
    const os = require('os-utils')

    var utilisation = os.totalmem() - os.freemem();
            var pourcentage = utilisation / os.totalmem() * 100;
            if (utilisation < os.totalmem() / 10)
                return message.channel.send("💻 RAM 💻\n[▫▫▫▫▫▫▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 && utilisation < os.totalmem() / 10 * 2)
                return message.channel.send("💻 RAM 💻\n[▪▫▫▫▫▫▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 2 && utilisation < os.totalmem() / 10 * 3)
                return message.channel.send("💻 RAM 💻\n[▪▪▫▫▫▫▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 3 && utilisation < os.totalmem() / 10 * 4)
                return message.channel.send("💻 RAM 💻\n[▪▪▪▫▫▫▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 4 && utilisation < os.totalmem() / 10 * 5)
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▫▫▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 5 && utilisation < os.totalmem() / 10 * 6)
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▪▫▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 6 && utilisation < os.totalmem() / 10 * 7)
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▪▪▫▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 7 && utilisation < os.totalmem() / 10 * 8)
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▪▪▪▫▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 8 && utilisation < os.totalmem() / 10 * 9)
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▪▪▪▪▫▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation >= os.totalmem() / 10 * 9 && utilisation < os.totalmem())
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▪▪▪▪▪▫] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
            if (utilisation === os.totalmem())
                return message.channel.send("💻 RAM 💻\n[▪▪▪▪▪▪▪▪▪▪] | " + Math.round(pourcentage) + "% | " + Math.round(utilisation) + "/" + Math.round(os.totalmem()) + " MB")
}

module.exports.help = {
    name : "ram",
    alliase: [],
    type: "bot",
}