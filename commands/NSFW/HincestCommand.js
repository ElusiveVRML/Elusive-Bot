const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const hmtai = require('hmtai')
// const nekoclient = require('nekos.life');
// const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('hincest', 'NSFW', []);
  }

  async run(client, message, args) {

    const GIF = hmtai.nsfw.incest();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hentai incest 🥵`)
    .setColor("RED")
    .setImage(GIF)
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