module.exports = {
	name: 'ms',
	description: 'Calculates ping.',
	execute(message, args) {
		message.channel.send('Calculating ping...').then (async (msg) =>{
			msg.delete();
			message.channel.send(`The latency is **${msg.createdTimestamp - message.createdTimestamp}ms**.`);
		});
	}
}
