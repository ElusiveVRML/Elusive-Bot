const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'Moderation', []);
  }

  async run(client, message, args) {
   
    const Discord = require('discord.js');

    const successfulEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('✅ Successful!')
    .setDescription('`User has been muted successfully!`');

    const failedEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`Failed to mute mentioned user!`');

    const failedEmbed2 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`You do not have permission to use this command!`');

    const failedEmbed3 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
          .setDescription('`Please specify someone to mute.`');

      message.channel.send('Sorry this command is not available yet!')

  }
}