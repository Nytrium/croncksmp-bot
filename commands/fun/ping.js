module.exports = {
	name: 'ping',
	description: 'Pong!',
	execute(message, args) {
		message.channel.send(':ping_pong: Pong.');
	},
};
