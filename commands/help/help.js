const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Shows the help menu',
	execute(Discord, message, args, client) {
		message.channel.send(help)
	},
};

const help = new Discord.MessageEmbed()
	.setColor('#39e695')
	.setTitle('Need some help?')
	.setThumbnail('https://cdn.discordapp.com/avatars/834998766440284212/f94a0853122a1b1a3038d534b32db02a.png')
	.addFields(
		{ name: ':hammer_pick: **Crafting**', value: '`!help crafting`', inline: true},
		{ name: ':sparkles: **Fun**', value: '`!help fun`', inline: true},
		{ name: ':robot: **General**', value: '`!help info`', inline: true},
		{ name: ':mag: **Search**', value: '`!help search`', inline: true},
	)
	.setTimestamp()
	.setFooter('Made with love, by Pixel.', 'https://cdn.discordapp.com/avatars/783272839435255818/a_1eaff7150d104c223f6b5b6d3e65b777.gif');