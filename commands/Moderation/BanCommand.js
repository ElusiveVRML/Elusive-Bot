const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Moderation', []);
  }

  async run(client, message, args) {

    const Discord = require('discord.js');

    const successfulEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('✅ Successful!')
    .setDescription('`User has been banned successfully!`');

    const failedEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`Failed to ban mentioned user!`');

    const failedEmbed2 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`You do not have permission to use this command!`');

    const failedEmbed3 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`Please specify someone to ban.`');

    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        if (!targetMember.bannable) {
          message.channel.send(failedEmbed)
        } else {
          targetMember.ban()
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