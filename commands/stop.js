// stops bot.
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('stops the fucking bot')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		await interaction.reply("Alerted CMD")
		await console.log('#\x1b[31m', "some one just turned off the fecking bot")
		await console.log("\x1b[0m");
		process.exit(0);
	},
};