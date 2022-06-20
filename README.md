# Drumy

Drumy is a music bot made for Discord, it supports main streaming sources such as `Youtube`, `Spotify`, `Soundcloud` and many others.

### ⚡ Configuration

Open the configuration file located in the main folder `config.js`.

```js
module.exports = {
    app: {
        px: 'd!',
        token: 'pasteyourtokenhere',
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
```

Basic configuration

- `app/px`, the prefix that will be set to use the bot
- `app/token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section
- `app/playing`, the activity of the bot

DJ mode configuration

- `opt/DJ/enabled`, whether the DJ mode should be activated or not 
- `opt/DJ/roleName`, the name of the DJ role to be used
- `opt/DJ/commands`, the list of commands limited to members with the DJ role

Advanced configuration

- `opt/maxVol`, the maximum volume that users can define
- `opt/loopMessage`, if the message that a music is played should be sent when it is looped
- `opt/discordPlayer`, options used by discord-player

### 📑 Installation

To use the project correctly you will need some tools.

- [FFmpeg](https://www.ffmpeg.org) to process audio
- [Node JS](https://nodejs.org/en/) (v16) for environment

Realized with ❤️ by [SPEEDOU](https://github.com/SPEED0U).
