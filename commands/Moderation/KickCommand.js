const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }

  run(client, message, args) {
   
    const Discord = require('discord.js');

    const successfulEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('✅ Successful!')
    .setDescription('`User has been kicked successfully!`');

    const failedEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`Failed to kick mentioned user!`');

    const failedEmbed2 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`You do not have permission to use this command!`');

    const failedEmbed3 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`Please specify someone to kick.`');

    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        if (!targetMember.kickable) {
          message.channel.send(failedEmbed)
        } else {
          targetMember.kick()
        message.channel.send(successfulEmbed)
        }
      } else {
        message.channel.send(failedEmbed3)
      }
    } else {
      message.channel.send(
        failedEmbed2
      )
    }

  }
}