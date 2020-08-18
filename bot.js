const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
const prefix = "DJS!";
const commands = {
	//This is all the Rich Embed infomation.
		about: {
			help: require("./events/about/help"),
			about: require("./events/about/about"),
		},

	};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} like a simpltion.`);
  client.user.setActivity("Currently in Development. || DJS!help");
});

client.on('message', msg => {
	if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(command === "help") {
		message.channel.send({ embed: commands.about.help });
	};
});

client.login('token');
