const superagent = require("superagent");
const Discord = require("discord.js")
const { get } = require("snekfetch");
const { Canvas } = require('canvas-constructor')

module.exports.run = async (client, message) => {
  
 var user = !message.mentions.users.first() ? message.author : message.mentions.users.first()
 
    message.delete()
    let wanted = new Canvas(300,400)
    .addImage(await get("http://zebra-api.tk/v1/wasted/wasted.png").then(async(r) => r.body),0,0,300,400)//https://i.pinimg.com/originals/bc/a8/ae/bca8ae8f9ab4558076e48975af68d87f.png
    .addImage(await get(`${user.displayAvatarURL}`).then(async(r) => r.body),55,120,190,235)
    .setTextFont('bold 16px Impact')
    .setTextAlign("center")
    .addText(user.username.split('').filter(a => ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","1","2","3","4","5","6","7","8","9",".",",","?",";",":","/","!","§","(",")","{","}","[","]","'","&","~","-","|","_","^","¨","$","%","ù","*","+","0","<",">","é","è","=","°","²","Θ","Σ","₭","Ⅰ"].includes(a.toLowerCase())).join(""), 150, 390)
    .toBuffer();
    var attach = new Discord.Attachment(wanted,'wasted.png')
message.channel.send(attach)
}
module.exports.help = {
    name : "wanted",
    alliase: [],
    type: "bot",
}