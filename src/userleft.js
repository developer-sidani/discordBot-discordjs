const Discord = require('discord.js');

module.exports = client => {
    client.on('guildMemberRemove', member => {
        // Send the message to a designated channel on a server:
        const channel = member.guild.channels.cache.find(ch => ch.name === 'stats2');
        // Do nothing if the channel wasn't found on this server
        if (!channel) return;
        channel.send(`${member} left ${member.guild.name}`)
    });
}