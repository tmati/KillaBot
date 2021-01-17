require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.log('KillaBot ready for deployment');
});

bot.on('message', msg => {
    switch (msg.content) {
        case '!interchange':
        case '!int':
        case '!Interchange':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e5/InterchangeMap_Updated_4.24.2020.png/revision/latest?cb=20200424115934');
            break;
        case '!customs':
        case '!cus':
        case '!Customs':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/55/CustomsLargeExpansionGloryMonki.png/revision/latest?cb=20200805222908');
            break;
        case '!labs':
        case '!Labs':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d7/The_Lab_Map_%28EN%29.png/revision/latest?cb=20200329133328');
            break;
        case '!Shoreline':
        case '!shoreline':
        case '!sho':
        case '!sl':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d4/Shoreline_marvelin_2_updated.png/revision/latest?cb=20191120000235');
            break;
        case '!factory':
        case '!Factory':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5c/Escape_from_Tarkov_Factory_Map_by_stealtheh.jpg/revision/latest?cb=20191005203908');
            break;
        case '!Woods':
        case '!woods':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/05/Glory4lyfeWoods_map_v4_marked.png/revision/latest?cb=20210103091918');
            break;
        case '!Reserve':
        case '!reserve':
        case '!res':
            msg.channel.send('https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/42/3D_Map_by_loweffortsaltbox.png/revision/latest?cb=20200410160036, Underground map: https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d0/ReserveExpandedUnderground.png/revision/latest?cb=20201004224828')
            break;
        case '!ammo':
            msg.channel.send('https://escapefromtarkov.gamepedia.com/Ballistics');
            break;
        case '!hideout':
            msg.channel.send('https://escapefromtarkov.gamepedia.com/Hideout');
            break;
        case '!loot':
            msg.channel.send('https://eft-loot.com/');
            break;
        case '!help':
            msg.channel.send('Hello! I am KillaBot. I provide maps from the EFT Wiki on this server. Use command !mapname (e.g. !factory) to get the map you need. \n\n I also have: \n!ammo - ammo chart \n!hideout - hideout crafting requirements \n!loot - link to eft-loot for quick value check');
            break;
    }
});
