const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MatchesCommand extends BaseCommand {
  constructor() {
    super('botupdate', 'Misc', []);
  }

  async run(client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('New Command! UltiStop Special')
    .setDescription('New Command released, made just for UltiStop!\nTo use this command its as simple as ` !!ulti `.\nExample Image Below!')
    .setImage('https://imgur.com/dVlGlgE.png')
    .setTimestamp();

    message.guild.channels.cache.find(i => i.name === 'synz-bot-updates').send(embed)
  }
}