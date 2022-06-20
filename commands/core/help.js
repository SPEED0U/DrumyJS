const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const commands = client.commands.filter(x => x.showHelp !== false);
        const embed = new MessageEmbed()
            .setAuthor({
                name: client.user.username,
                iconURL: client.user.displayAvatarURL()
            })
            .setColor("#5765f2")
            .setDescription('The following commands are those supported by me, respect the arguments.')
            .addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` ${x.aliases.map(y => y).join(', ')}\`` : '\`'}`).join(' | '))
            .setFooter({
                text: client.user.tag,
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp()
        message.channel.send({ embeds: [embed] })
    },
};