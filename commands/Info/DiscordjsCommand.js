const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, version: djsversion } = require('discord.js');

module.exports = class DiscordjsCommand extends BaseCommand {
  constructor() {
    super('discordjs', 'Info', []);
  }

  async run(client, message, args) {
    const embedDiscord = new MessageEmbed()
      .setThumbnail('https://spng.pngfind.com/pngs/s/102-1026997_jeffy-discordjs-discord-js-logo-hd-png-download.png')
      .addField('Discord.JS', [
        `**❯ Discord.js Version:** v${djsversion}`,
        `**❯ Discord.js Library:** https://discord.js.org`,
        `**❯ Discord.js Docs:** https://discord.js.org/#/docs`
      ])
      .setTimestamp()
      .setFooter('Elusive | Discord.JS');

    message.channel.send(embedDiscord);
  }
}