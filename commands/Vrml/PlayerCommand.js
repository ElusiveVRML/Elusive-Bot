const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MatchesCommand extends BaseCommand {
  constructor() {
    super('player', 'Vrml', []);
  }

  async run(client, message, args) {

    const starters = message.guild.roles.cache.find(role => role.name == 'Starter');
    const coach = message.guild.roles.cache.find(role => role.name == 'Coach');
    const captain = message.guild.roles.cache.find(role => role.name == 'Captain');
    const vice = message.guild.roles.cache.find(role => role.name == 'Vice Captain');
    const gkdf = message.guild.roles.cache.find(role => role.name == 'GK/DF');
    const sub = message.guild.roles.cache.find(role => role.name == 'Substitute');
    const lw = message.guild.roles.cache.find(role => role.name == 'LW');
    const rw = message.guild.roles.cache.find(role => role.name == 'RW');
    const ar = message.guild.roles.cache.find(role => role.name == 'AR');
    const mf = message.guild.roles.cache.find(role => role.name == 'MF');

    const trap = new Discord.MessageEmbed()
      .setTitle('Player: NotATrap-')
      .setDescription(`NotATrap- is the captain of Trap's VRML`)
      .addField('Roster Position', [
        `${captain}`,
        `${starters}`
      ])
      .addField('Game Position', [
        `${mf}`
      ])
      .addField('Simple Stats', [
        `Level: 29`,
        `Win Rate: 48%`,
        `Matches: 120+`
      ])
      .setTimestamp();

    const isaacc = new Discord.MessageEmbed()
      .setTitle('Player: Isaaccb')
      .setDescription(`Isaaccb is one of Trap's Starters.`)
      .addField('Roster Position', [
        `${starters}`
      ])
      .addField('Game Position', [
        `${rw}`
      ])
      .addField('Simple Stats', [
        `Level: 50`,
        `Win Rate: NaN%`,
        `Matches: 400+`
      ])
      .setTimestamp();

    const cheesy = new Discord.MessageEmbed()
      .setTitle('Player: Cheesy-._.-')
      .setDescription(`Cheesyu-._.- is one of Trap's Starters.`)
      .addField('Roster Position', [
        `${starters}`
      ])
      .addField('Game Position', [
        `${lw}`
      ])
      .addField('Simple Stats', [
        `Level: 50`,
        `Win Rate: Unknown%`,
        `Matches: 600+`
      ])
      .setTimestamp();

    const cilck = new Discord.MessageEmbed()
      .setTitle('Player: Cilck')
      .setDescription(`Cilck is one of Trap's Starters.`)
      .addField('Roster Position', [
        `${starters}`
      ])
      .addField('Game Position', [
        `${gkdf}`
      ])
      .addField('Simple Stats', [
        `Level: 36`,
        `Win Rate: NaN%`,
        `Matches: NaN+`
      ])
      .setTimestamp();

    if (!args.length) {
      message.channel.send('No player from the Roster has been selected. ` Example: !!player 0Synz0 `');
    } else if (args[0].toLowercase() === 'notatrap-') {
      message.channel.send(trap);
    } else if (args[0].toLowercase() === 'isaaccb') {
      message.channel.send(isaacc);
    } else if (args[0].toLowercase() === 'cheesy-._.-') {
      message.channel.send(cheesy);
    } else if (args[0].toLowercase() === 'cilck') {
      message.channel.send(cilck);
    }
  }
}