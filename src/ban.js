module.exports = (message) => {
    const { member, mentions } = message
    if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {
        const target = mentions.users.first();
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);

            if (!targetMember.bannable) {
                message.reply('Cannot Ban that user!');
                return;
            }
            if (targetMember.hasPermission())
                targetMember.ban();
            message.reply('That User has been banned!')
        } else {
            message.reply('Please specify someone to ban!');
        }
    } else {
        message.reply('Sorry you don\'t have permission to ban!')
    }
}