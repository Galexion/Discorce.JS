const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require("./config.json");
const prefix = "DJS!";
let userlink = new Map();
const commands = {
		about: {
			help: require("./events/about/help"),
			about: require("./events/about/about"),
		},
        registering: {
            regText: require("./events/registering/register"),
        },
	};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} like a simpltion.`);
  client.user.setActivity("Currently in Development. || DJS!help");
});

client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        return message.channel.send({ embed: commands.about.help.embed }).catch(console.error);
    }

    if (command === "register") { 
        message.channel.send("> Now Registering...")
        if (!userlink.has(message.author.id)) {
            userlink.set(message.author.id, 110);
            return message.channel.send("> Registered! Welcome to the Club ${userObject} !\n> Remeber to do `DJS!export` once and a while so you don't loose your data in event of a restart.");
        }
        else {
         return message.channel.send("You are already Registered, but Make Sure to export your Progress using `DJS!export`.")
    }
 }

    
});

client.login(token);
