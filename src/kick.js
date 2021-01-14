module.exports = (message) => {
    const { member, mentions } = message
    if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
        const target = mentions.users.first();
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);

            if (!targetMember.kickable) {
                message.reply('Cannot Kick that user!');
                return;

            }
            if (targetMember.hasPermission())
                targetMember.kick();
            message.reply('That User has been kicked!')

        } else {
            message.reply('Please specify someone to kick!');
        }
    }
    else {
        message.reply('Sorry you don\'t have permission to kick!')
    }
}