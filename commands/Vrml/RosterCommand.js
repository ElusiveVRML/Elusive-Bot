const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MatchesCommand extends BaseCommand {
  constructor() {
    super('roster', 'Vrml', []);
  }

  async run(client, message, args) {

    const starters = message.guild.roles.cache.find(role => role.name == 'Starter');
    const gkdf = message.guild.roles.cache.find(role => role.name == 'GK/DF');

    const embed = new Discord.MessageEmbed()
      .setTitle(`<:vrmlwhite:801993007259189248>` + ' VRML Roster')
      .addField('Captain', [
        `~ [00] S-y.n-z ~`,
        `\u200b`
      ])
      .addField('Vice Captain', [
        `~ [00] None ~`,
        `\u200b`
      ])
      .addField('Starters', [
        `~ [00] S-y.n-z- ~`,
        '~ [00] UltiStop ~',
        `~ [00] Eye_C ~`,
        `~ [00] Madhouse49 ~`,
        `\u200b`
      ])
      .addField('Substitutes', [
        `~ [00] None ~`
      ])
      .setTimestamp()
      .setFooter('Elusive | Main roster')

    message.channel.send(embed);
  }
}