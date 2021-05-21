// fulfill requirements
const Discord = require('discord.js');
const fs = require('fs');

// create client
const client = new Discord.Client();

// new collection
client.commands = new Discord.Collection();

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

// read command files
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);

console.log(`Command loaded: ${commandFiles}`);
	}
}

// commands
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

    try {
        client.commands.get(command).execute(Discord, message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

// responses
client.on('message', message => {
	if (message.content === 'im lonely someone talk to me please') {
		message.channel.send('Hello! :relaxed:');
	}
	else if (message.content === 'poonxal bot best bot') {
		message.channel.send('man woke up and chose to speak fax');
	}
})