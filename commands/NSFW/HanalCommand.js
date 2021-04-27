const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('hanal', 'NSFW', []);
  }

  async run(client, message, args) {

    const GIF = await neko.nsfw.anal();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hentai Anal 🍑`)
    .setColor("RED")
    .setImage(GIF.url)
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