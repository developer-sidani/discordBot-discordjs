module.exports = (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
        })
    }
    else {
        message.reply("Sorry you don't have perminsion!")
    }
}