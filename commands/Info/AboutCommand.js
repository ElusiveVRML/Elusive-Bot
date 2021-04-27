const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AboutCommand extends BaseCommand {
  constructor() {
    super('about', 'Info', []);
  }

  async run(client, message, args) {

    const { MessageEmbed } = require('discord.js');

    const about = new MessageEmbed()
      .setTitle('About Minimum Requirement!')
      .setDescription('**Traps** Is an aspiring VRML team for the game **Echo Arena**, This team was created and still lead by **Synz (NotATrap-)**!')
      .setTimestamp();

    message.channel.send(about);
  }
}