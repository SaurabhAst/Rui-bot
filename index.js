const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// Event: When the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Event: When a message is received
client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore bot messages

  // Simple command response
  if (message.content === '!hello') {
    message.channel.send('Hi there, I am Rui! also which anime are you watching currently?');
  }
});

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);
