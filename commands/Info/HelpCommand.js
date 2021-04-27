const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'Info', []);
  }

  async run(client, message, args) {

    const owner = "650792553393946625";
    const prefix = '!!'

    const errorembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('❌ Uh oh...')
      .setDescription('`Error: This Command is in development!`');

    const ownerErrorEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('❌ Uh oh...')
      .setDescription('`Error: This command can only run by the bot owner!`')

    const helpMain = new Discord.MessageEmbed()
      .setTitle('Choose a Section!')
      .addField('⚔️ Moderation', `\`${prefix}help moderation\``, true)
      .addField('❔ Information', `\`${prefix}help information\``, true)
      .addField('📷 Image', `\`${prefix}help image\``, true)
      .addField('😂 Fun', `\`${prefix}help fun\``, true)
      .addField('🛑 NSFW', `\`${prefix}help nsfw\``, true)
      .addField('✨ Misc', `\`${prefix}help misc\``, true)
      .addField('🔑 Owner', `\`${prefix}help owner\``, true)
      .addField(`<:vrmlwhite:801993007259189248>` + ' VRML', `\`${prefix}help vrml\``, true)
      .setTimestamp()
      .setFooter('Elusive | Help Selection');

    const helpInfo = new Discord.MessageEmbed()
      .setTitle('❔ Information Commands')
      .setDescription('`!!help` `!!about` `!!botinfo` `!!discordjs` `!!nodejs`')
      .setTimestamp()
      .setFooter('Elusive | Information');

    const helpMod = new Discord.MessageEmbed()
      .setTitle('⚔️ Moderation Commands')
      .setDescription('`!!ban` `!!kick`')
      .setTimestamp()
      .setFooter('Elusive | Moderation');

    const helpNSFW = new Discord.MessageEmbed()
      .setTitle('🥵 NSFW Commands')
      .setDescription('`!!ahegao` `!!bdsm` `!!blowjob` `!!boobjob` `!!creampie` `!!cuckold` `!!cum` `!!elves` `!!glasses` `!!hanal` `!!hfeet` `!!hfemdom` `!!hgangbang` `!!hincest` `!!horgry` `!!hpublic` `!!hpussy` `!!hthighs` `!!huniform` `!!hyuri` `!!masturbation` `!!neko` `!!pantsu` `!!tentacles` `!!trap` `!!anal` `!!ass` `!!boobs` `!!fourk` `!!gw` `!!porngif` `!!pussy` `!!thigh` `!!hentai`')
      .setTimestamp()
      .setFooter('Elusive | NSFW');

    const helpVrml = new Discord.MessageEmbed()
      .setTitle(`<:vrmlwhite:801993007259189248>` + ' VRML Commands ')
      .setDescription('`!!matches` `!!roster` `!!player` `!!positions`')
      .setTimestamp()
      .setFooter('Elusive | VRML');

    if (!args.length) {
      message.channel.send(helpMain);
    } else if (args[0] === 'moderation') {
      message.channel.send(helpMod);
    } else if (args[0] === 'information') {
      message.channel.send(helpInfo);
    } else if (args[0] === 'image') {
      message.channel.send(errorembed);
    } else if (args[0] === 'fun') {
      message.channel.send(errorembed);
    } else if (args[0] === 'nsfw') {
      if (!message.channel.nsfw) {
        message.channel.send('This is not a **NSFW** channel!');
      } else {
        message.channel.send(helpNSFW);
      }
    } else if (args[0] === 'misc') {
      message.channel.send(errorembed);
    } else if (args[0] === 'owner') {
      if (message.author.id !== owner) {
        message.channel.send(ownerErrorEmbed);
      } else {
        message.channel.send(errorembed);
      }
    } else if (args[0] === 'vrml') {
      message.channel.send(helpVrml)
    }

  }
}