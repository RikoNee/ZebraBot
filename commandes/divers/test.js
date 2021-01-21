const Discord = require("discord.js");
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  let date = new Date()
    fs.appendFile('./txt/log.txt', date.getUTCDay() + "-" + (date.getUTCMonth()+1) + "-" + date.getUTCFullYear() + " | " + (date.getUTCHours()+2) + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + " | " + message.guild.id + " | " + message.author.id + "\n", (err) => {
      if (err) throw err;
    })
  }
module.exports.help = {
    name : "test",
    alliase: [],
    type: "bot",
}
