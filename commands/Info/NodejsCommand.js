const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class NodejsCommand extends BaseCommand {
  constructor() {
    super('nodejs', 'Info', []);
  }

  async run(client, message, args) {
    const embedNode = new MessageEmbed()
      .setThumbnail('https://spng.subpng.com/20180619/tgc/kisspng-node-js-javascript-express-js-server-side-scriptin-node-js-5b28f612aed5e5.0076608015294110907161.jpg')
			.addField('Node.JS', [
        `**❯ Node.js:** ${process.version}`,
        `**❯ Node.js Site:** https://nodejs.org`,
        `**❯ Node.js Docs:** https://nodejs.org/en/docs`
      ])
      .setTimestamp()
      .setFooter('Elusive | Node.JS');

      message.channel.send(embedNode);
  }
}