module.exports = {
	name: 'discms',
	description: 'Calculates Discord ping time.',
	execute(client, message, args) {
		message.channel.send('Calculating ping...').then (async (msg) =>{
			msg.delete();
			message.channel.send(`The DiscordAPI latency is **${Math.round(client.ws.ping)}ms**.`);
		});
	}
}
