const { MessageEmbed } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    if (track.source == "spotify") {
        const embed = new MessageEmbed()
        .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL()
        })
        .setColor("#5765f2")
        .setThumbnail("https://www.actuia.com/wp-content/uploads/2019/06/spotify.png")
        .addField("Started playing", `${"`"+ track.author + " ─ " + track.title + "`"}`)
        .addField("Requested by", `${track.requestedBy}`)
        .setTimestamp()
    queue.metadata.send({ embeds: [embed] })
    } else {
        const embed = new MessageEmbed()
            .setAuthor({
                name: client.user.username,
                iconURL: client.user.displayAvatarURL()
            })
            .setColor("#5765f2")
            .setThumbnail(track.thumbnail)
            .addField("Started playing", `${"`" + track.title + "`"}`)
            .addField("Requested by", `${track.requestedBy}`)
            .setTimestamp()
        queue.metadata.send({ embeds: [embed] })
    }
});

player.on('trackAdd', (queue, track) => {
    if (track.source == "spotify") {
        const embed = new MessageEmbed()
        .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL()
        })
        .setColor("#5765f2")
        .setThumbnail(track.thumbnail)
        .addField("Track added in queue", `${"`"+ track.author + " ─ " + track.title + "`"}`)
        .addField("Requested by", `${track.requestedBy}`)
        .setTimestamp()

    queue.metadata.send({ embeds: [embed] })
    } else {
        const embed = new MessageEmbed()
            .setAuthor({
                name: client.user.username,
                iconURL: client.user.displayAvatarURL()
            })
            .setColor("#5765f2")
            .setThumbnail(track.thumbnail)
            .addField("Track added in queue", `${"`" + track.title + "`"}`)
            .addField("Requested by", `${track.requestedBy}`)
            .setTimestamp()
    
        queue.metadata.send({ embeds: [embed] })
    }
});

player.on('botDisconnect', (queue) => {
    const embed = new MessageEmbed()
        .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL()
        })
        .setColor("#5765f2")
        .setDescription("I was manually disconnected from the voice channel, clearing queue...")
        .setTimestamp()
    queue.metadata.send({ embeds: [embed] })
});

player.on('channelEmpty', (queue) => {
    const embed = new MessageEmbed()
        .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL()
        })
        .setColor("#5765f2")
        .setDescription("Nobody is in the voice channel, leaving the voice channel.")
        .setTimestamp()
    queue.metadata.send({ embeds: [embed] })
});

player.on('queueEnd', (queue) => {
    const embed = new MessageEmbed()
        .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL()
        })
        .setColor("#5765f2")
        .setDescription("I finished reading the whole queue.")
        .setTimestamp()
    queue.metadata.send({ embeds: [embed] })
});