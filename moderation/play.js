const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    
    const music = args.join(" ");

    bot.distube.play(message, music)
}


exports.help = {
    name: 'play'
    }