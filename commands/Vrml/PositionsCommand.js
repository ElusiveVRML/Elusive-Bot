const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MatchesCommand extends BaseCommand {
  constructor() {
    super('positions', 'Vrml', []);
  }

  async run(client, message, args) {

    const captain = message.guild.roles.cache.find(role => role.name == 'Captain');
    const vicecap = message.guild.roles.cache.find(role => role.name == 'Vice Captain');
    const coach = message.guild.roles.cache.find(role => role.name == 'Coach');
    const starters = message.guild.roles.cache.find(role => role.name == 'Starter');
    const gkdf = message.guild.roles.cache.find(role => role.name == 'GK/DF');
    const sub = message.guild.roles.cache.find(role => role.name == 'Substitute');
    const lw = message.guild.roles.cache.find(role => role.name == 'Left Wing');
    const rw = message.guild.roles.cache.find(role => role.name == 'Right Wing');
    const ar = message.guild.roles.cache.find(role => role.name == 'All-Round');
    const mf = message.guild.roles.cache.find(role => role.name == 'Midfield');

    const embed = new Discord.MessageEmbed()
      .addField('Roster Positions', [
        `${captain}`,
        `${vicecap}`,
        `${coach}`,
        `${starters}`,
        `${sub}`
      ])
      .addField('Match Positions', [
        `${gkdf}`,
        `${mf}`,
        `${rw}`,
        `${lw}`,
        `${ar}`
      ])
      .setTimestamp();

    const matchEmbed = new Discord.MessageEmbed()
      .setTitle('Match Positions')
      .addField(gkdf)
      .addField(mf)
      .addField(rw)
      .addField(lw)
      .addField(ar)
      .setTimestamp();

    const rosterEmbed = new Discord.MessageEmbed()
      .setTitle('Roster Positions')
      .addField(captain)
      .addField(vicecap)
      .addField(coach)
      .addField(starters)
      .addField(sub)
      .setTimestamp();

    if (!args.length) {
      message.channel.send(embed);
    } else if (args[0].toLowercase() === 'match') {
      message.channel.send(matchEmbed);
    } else if (args[0].toLowercase() === 'roster') {
      message.channel.send(rosterEmbed);
    }



  }
}