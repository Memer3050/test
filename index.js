const { Client, IntentsBitField, GatewayIntentBits, Events, REST, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");
const { data } = require("./commands/testping");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { token } = require("./config.json");


client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}


client.login(token);

client.on(Events.ClientReady, () => {
    console.warn("bot is online");
	client.user.setStatus('online');
	client.user.setActivity('/Help for more info')
	client.user.setPresence('https://discord.com/oauth2/authorize?client_id=1045391223634010132&scope=bot&permissions=8')
});


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});