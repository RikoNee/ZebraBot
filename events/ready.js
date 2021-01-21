module.exports = async (client) => {
    console.log(`${client.user.username} en ligne!`);
    await client.website.load(client);
  
    let i = 0;
    
    setInterval(async () =>
    {
      if (i == 0) {
          await client.user.setActivity(`[😝] Use :P : ${client.config.BOT_PREFIX}help`, { type: 'LISTENING' });
        i = i + 1
        }
      if (i == 1) {
          await client.user.setActivity(`[🥰] On ${client.guilds.size} servers`, { type: 'WATCHING' });
        i = i - 1
        }
    }, 12000)
}