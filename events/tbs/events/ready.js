module.exports = async (client) => {
    console.log(`${client.user.username} en ligne!`);


    let i = 0;
    
    setInterval(async () =>
    {
      if (i == 0) {
          await client.user.setActivity(`Mhh .. donuts !`, { type: 'LISTENING' });
        i = i + 1
        }
      if (i == 1) {
          await client.user.setActivity(`Oh pinaise !`, { type: 'WATCHING' });
        i = i - 1
        }
    }, 1000)
    
}