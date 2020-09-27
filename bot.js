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
        lessons: {
            110: require("./events/lessons/110"),
            120: require("./events/lessons/120"),
            130: require("./events/lessons/130"),
            140: require("./events/lessons/140"),
            150: require("./events/lessons/150"),
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
            return message.channel.send({ embed: commands.registering.regText.embed }).catch(console.error);
        }
        else {
         message.channel.send("> You are already Registered, but Make Sure to export your Progress using `DJS!export`.");
    };

    if (command === "next") {
        if(!userlink.has(message.author.id)) {
            message.channel.send("> You Are Not Registered. Register with `DJS!register` Then come Back here.");
        }else {
            switch (args[0]) {
                case "skip":
                    if (userlink.get(message.author.id) === 110) {
                        userlink.set(message.author.id, 150)
                    return message.channel.send({ embed: commands['lessons'][userlink.get(message.author.id)]['embed']});
                    } 
            }
        }
    };
 }

    
});

client.login(token);
