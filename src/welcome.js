// const Discord = require('discord.js');

module.exports = client => {
    client.on('guildMemberAdd', member => {
        // Send the message to a designated channel on a server:
        const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome2');
        // Do nothing if the channel wasn't found on this server
        if (!channel) return;
        // console.log(member)
        // Send the message, mentioning the member
        // const embed = new Discord.MessageEmbed()
        //     .setTitle(`Welcome to ${member.guild.name}`)
        //     .setImage(member.user.displayAvatarURL())
        // channel.send(embed)
        // console.log(member)
        // console.log(member.user)
        member.guild.memberCount < 13 ?
            channel.send(`Welcome to the server, ${member}. ${member.guild.name} contains ${member.guild.memberCount} members`) : channel.send(`Welcome to the server, ${member}. ${member.guild.name} contains ${member.guild.memberCount} member`);
    });
}