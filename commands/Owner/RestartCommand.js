const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class RestartCommand extends BaseCommand {
  constructor() {
    super('restart', 'owner', []);
  }

  async run(client, message, args) {

    const ownerErrorEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('❌ Uh oh...')
      .setDescription('`Error: This command can only run by the bot owner!`');

    const restartingEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('BOT IS RESTARTING...');

    if (message.author.id !== "650792553393946625") {
        message.channel.send(ownerErrorEmbed)
    }
    await message.channel.send(restartingEmbed)
    process.exit();

  }
}