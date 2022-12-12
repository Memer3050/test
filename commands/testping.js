const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pings you????'),
	async execute(interaction) {
		await interaction.reply('Hell');
	},
};