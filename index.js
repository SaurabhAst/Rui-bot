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


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const commands = {
  add : (args) =>{
    if (args.length < 2){
      return 'you atleast need to give two numbers, Dummy!';
    }
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);
    if (isNaN(num1) || isNaN(num2)){
      return 'baka! give me numbers to add'
    }
    return `the sum is ${num1 + num2}`;
  },
  sub : (args) =>{
    if (args.length < 2){
      return 'you atleast need to give two numbers, Dummy!';
    }
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);
    if (isNaN(num1) || isNaN(num2)){
      return 'baka!, give me numbers to subtract'
    }
    return `the difference is ${num1 - num2}`;
  },
  //hello : message.channel.send('Hey there, I am Rui! also which anime are you watching currently?')
};

client.on('messageCreate', (message) => {
  if (!message.content.startsWith('!') || message.author.bot) return; // Ignore bot messages and ones which dont start with '!'

  let args = message.content.slice(1).trim().split(/ +/); //seprated arguments
  let command = args.shift().toLowerCase(); //shifting command to 'command'

  if (command in commands){
    const result = commands[command](args);
    message.channel.send(result);
  } else{
    message.channel.send("Sorry, but I don't recognise that command");
  }
});

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);
