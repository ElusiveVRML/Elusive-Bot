require('dotenv').config();
const BaseCommand = require('../../utils/structures/BaseCommand');
const token = process.env.DISCORD_BOT_TOKEN;

module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('role', 'Owner', []);
  }

  async run(client, message, args) {

    const Discord = require('discord.js');
    const owner = "650792553393946625";

    if (message.author.id !== owner) {
        message.channel.id('Hahaha, good try!');
    } else {
    let teamMate = message.mentions.members.first()   
    let teamRole = message.guild.roles.cache.find(role => role.name == `Coach`)
    message.member.roles.add(teamRole)
    teamMate.roles.add(teamRole)
    }

  }
}