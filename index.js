// Cargar las variables de entorno desde el archivo .env
const dotenv = require('dotenv');
dotenv.config();

// Importar las clases necesarias de discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Crear una nueva instancia del cliente con los intents adecuados
const bot = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Evento que se ejecuta cuando el bot está listo
bot.once('ready', () => {
    console.log(`Bot iniciado como ${bot.user.tag}`);
});

// Evento para manejar mensajes
bot.on('messageCreate', mensaje => {
    if (mensaje.content === 'Hola') {
        mensaje.reply(`Hola ${mensaje.author.username}`);
    }
});

// Iniciar sesión con el token de cliente
const token = process.env.DISCORD_CLIENT_TOKEN;
bot.login(token);
