const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    

    const day = parseInt(args[0]);
    const month = parseInt(args[1]);

    
    if (!day) {
        return message.channel.send('Erreur `jour`: ' + client.config.BOT_PREFIX + "signe <jour> <mois>");
    }

    if (!month) {
        return message.channel.send('Erreur `mois`: ' + client.config.BOT_PREFIX + "signe <jour> <mois>");
    }

    if (month < 1 || month > 12) {
        return message.reply('Erreur: Veuillez entrer un mois valide [1, 12].');
    }

    if (month === 1) {
        if (day >= 1 && day <= 19) return message.reply(' ♑ Ton signe astro est Capricorne.');
        if (day >= 20 && day <= 31) return message.reply(' ♒ Ton signe astro est Verseau');
        return message.reply(' Veuillez entrer un mois valide');;
    } 
    else if (month === 2) {
        if (day >= 1 && day <= 18) return message.reply(' ♒ Ton signe astro est Verseau');
        if (day >= 19 && day <= 29) return message.reply(' ♓ Ton signe astro est Poisson');
        return message.reply(' Veuillez entrer un mois valide');;
    } 
    else if (month === 3) {
        if (day >= 1 && day <= 20) return message.reply(' ♓ Ton signe astro est Poisson');
        if (day >= 21 && day <= 31) return message.reply(' ♈ Ton signe astro est Bélier');
        return message.reply(' Veuillez entrer un mois valide');;
    } 
    else if (month === 4) {
        if (day >= 1 && day <= 19) return message.reply(' ♈ Ton signe astro est Bélier');
        if (day >= 20 && day <= 31) return message.reply(' ♉ Ton signe astro est Taureau');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 5) {
        if (day >= 1 && day <= 20) return message.reply(' ♉ Ton signe astro est Taureau');
        if (day >= 21 && day <= 31) return message.reply(' ♊ Ton signe astro est Gémeaux');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 6) {
        if (day >= 1 && day <= 20) return message.reply(' ♊ Ton signe astro est Gémeaux');
        if (day >= 21 && day <= 31) return message.reply(' ♋ Ton signe astro est Cancer');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 7) {
        if (day >= 1 && day <= 22) return message.reply(' ♋ Ton signe astro est Cancer');
        if (day >= 23 && day <= 31) return message.reply(' ♌ Ton signe astro est Lion');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 8) {
        if (day >= 1 && day <= 22) return message.reply(' ♌ Ton signe astro est Lion');
        if (day >= 23 && day <= 31) return message.reply(' ♍ Ton signe astro est Vierge');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 9) {
        if (day >= 1 && day <= 22) return message.reply(' ♍ Ton signe astro est Vierge');
        if (day >= 23 && day <= 31) return message.reply(' ♎ Ton signe astro est Balance');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 10) {
        if (day >= 1 && day <= 22) return message.reply(' ♎ Ton signe astro est Balance');
        if (day >= 23 && day <= 31) return message.reply(' ♏ Ton signe astro est Scorpion');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 11) {
        if (day >= 1 && day <= 21) return message.reply(' ♏ Ton signe astro est Scorpion');
        if (day >= 22 && day <= 31) return message.reply(' ♐ Ton signe astro est Sagittaire');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else if (month === 12) {
        if (day >= 1 && day <= 21) return message.reply(' ♐ Ton signe astro est Sagittaire');
        if (day >= 22 && day <= 31) return message.reply(' ♑ Ton signe astro est Capricorne');
        return message.reply(' Veuillez entrer un mois valide.');;
    } 
    else {
        return message.reply(' Veuillez entrer un mois valide.');;
    }
}   

module.exports.help = {
    name : "signe",
    alliase: [],
    type: "bot",
}
