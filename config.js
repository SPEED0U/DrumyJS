module.exports = {
    app: {
        px: 'd!',
        token: '',
        playing: 'type d!help for commands'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1<<25,
                opusEnconded: true,
                encoderArgs: ['-af', 'bass=g=25,dynaudnorm=f=200']
            }
        }
    }
};
