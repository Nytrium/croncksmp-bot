// fulfill requirements
const Discord = require('discord.js');

// create client
const client = new Discord.Client();

// require config
const config = require('./config.json');
const { token } = config;

// define prefix
const prefix = "!";

// login
client.login(token);
console.log('Logged in.');

// when ready, run code
client.once('ready', () => {
	console.log(`Bot is online! Successfully logged in as ${client.user.tag}.`);
});

// commands
client.on('message', message => {
	if (message.content === 'im lonely someone talk to me please') {
		message.channel.send('Hello! :relaxed:');
	}
	if (message.content === 'poonxal bot best bot') {
		message.channel.send('man woke up and chose to speak fax');
	}
	if (message.content === `${prefix}ping`) {
		message.channel.send(':ping_pong: Pong!');
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send(':nose: Boop!');
	}
	else if (message.content === `${prefix}ip`) {
		message.channel.send('The IP is **cronck.mooo.com**.');
	}
	else if (message.content === `${prefix}ms`) {
		message.channel.send('Calculating ping...').then (async (msg) =>{
			msg.delete();
			message.channel.send(`The latency is **${msg.createdTimestamp - message.createdTimestamp}ms**.`);
		});
	}
	else if (message.content === `${prefix}discms`) {
		message.channel.send('Calculating ping...').then (async (msg) =>{
			msg.delete();
			message.channel.send(`The DiscordAPI latency is **${Math.round(client.ws.ping)}ms**.`);
		});
	}
});