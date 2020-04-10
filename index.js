require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()
const myServers = ['691044527426895954'];
var Premium = false;

client.on('guildCreate', (guild) => {
	for (var i in myServers) {
		// Check if the guild is premium
		if (guild.id == myServers[i]) {
		// Set to true and stop the loop.
		Premium = true;
		break;
		}
	};
	
	if(!Premium) {
		guild.leave();
		}
	}
)

client.on("ready", () => {
	client.guilds.cache.forEach(guild => {
		for (var j in myServers) {
			// Check if the guild is premium
			if (guild.id == myServers[j]) {
			// Set to true and stop the loop.
			Premium = true;
			break;
			}
		};
	
		if(!Premium) {
			guild.leave();
			}
		}
	)
	
	console.log(`Logged in as ${client.user.tag}!`)
	}
)

client.on("guildMemberAdd", member => {
	let textChannel = client.channels.cache.get('691044527997452360');
	
	textChannel.send(
		`Hello <@${member.user.id}> and welcome to the Century Endurance server 👋
See the <#691045736145747978> channel for information how to join our races!
Also please change your name to "<First Name> <Last Name>" format 🙏
Thanks, have fun and enjoy your stay 👍`
		)
	}
)

client.login(process.env.BOT_TOKEN)
