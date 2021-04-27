const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AboutCommand extends BaseCommand {
  constructor() {
    super('ulti', 'info', []);
  }

  async run(client, message, args) {

    // const { MessageEmbed } = require('discord.js');

    // const about = new MessageEmbed()
    //   .setTitle('About Elusive!')
    //   .setDescription('**Elusive** Is an aspiring VRML team for the game **Echo Arena**, This team was created and still lead by **Synz**!')
    //   .setTimestamp();

    message.channel.send('"Why do the pretty ones always live so far away." - Ulti 21/04/21');
  }
}