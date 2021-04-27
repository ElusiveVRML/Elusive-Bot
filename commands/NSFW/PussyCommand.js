const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('pussy', 'NSFW', []);
  }

  async run(client, message, args) {

    const image = await nsfw.pussy();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pussy Image`)
    .setColor("RED")
    .setImage(image)
    .setTimestamp()
    .setFooter(message.author.tag);

    const failed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('❌ Uh oh...')
    .setDescription('`Error: This is not a NSFW channel!`');

    if (!message.channel.nsfw) {
        message.channel.send(failed);
    } else {
        message.channel.send(embed);
    }
  }
}