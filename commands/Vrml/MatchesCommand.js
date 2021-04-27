const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MatchesCommand extends BaseCommand {
  constructor() {
    super('matches', 'Vrml', []);
  }

  async run(client, message, args) {

    const starters = message.guild.roles.cache.find(role => role.name == 'Starter');
    const subs = message.guild.roles.cache.find(role => role.name == 'Substitute');

    const embed = new Discord.MessageEmbed()
      .setTitle('VRML Matches')
      .setDescription('Please Check ' + `<#810713361867866142>` + ' For Information.');

    const matches = new Discord.MessageEmbed()
      .setTitle('VRML Matches')
      .setDescription('Updated Every Monday at 12 EST')
      .addField('Assigned Matches:', [
        `Electro Echo: 16th Feb, 2:30 PM`,
        `Harmony: Not Scheduled`,
        `\u200b`
      ])
      .addField('Assigned Starters', [
        `<@650792553393946625>`,
          `<@762736185964888085>`,
          `<@477516829393289248>`,
          `<@766812279761010708>`,
        `\u200b`
      ])
      .addField('Assigned Substitutes', [
        `<@781028964743118848>`
      ])
      .setTimestamp()
      .setFooter('Elusive | Scheduled');

    if (!args.length) {
      message.channel.send(embed)
    } else if (args[0] === 'assigned') {
        message.guild.channels.cache.find(i => i.name === 'assigned-matches').send(`${starters}, ${subs}`, matches)
    } else if (args[0] === 'delete') {
      client.channels.cache.get(801444036572741675).messages.fetch(802058522841186364).then(message => message.delete())
    }
  }
}