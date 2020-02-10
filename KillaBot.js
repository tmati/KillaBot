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
            msg.channel.send('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5d/InterchangeMapLorathorDark.jpg');
            break;
        case '!customs':
        case '!cus':
        case '!Customs':
            msg.channel.send('https://escapefromtarkov.gamepedia.com/File:Customs_Nuxx_20190106_1.2.png');
            break;
        case '!labs':
        case '!Labs':
            msg.channel.send('https://escapefromtarkov.gamepedia.com/File:LabsMapNehalemX.webp');
            break;
        case '!Shoreline':
        case '!shoreline':
        case '!sho':
        case '!sl':
            msg.channel.send('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d4/Shoreline_marvelin_2_updated.png?version=f28651df0d566bdc1996aeeacb496d15');
            break;
        case '!factory':
        case '!Factory':
            msg.channel.send('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5c/Escape_from_Tarkov_Factory_Map_by_stealtheh.jpg?version=2710f1b141acdd8916616205fe6b7370');
            break;
        case '!Woods':
        case '!woods':
            msg.channel.send('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/06/WoodsMapKeySpawnsExits.jpg?version=ddc2b73e366c043da5f01ebd3a1fd532');
            break;
        case '!Reserve':
        case '!reserve':
        case '!res':
            msg.channel.send('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c9/Loot_.jpg?version=5e9a6784c341bca89d918b385bc331ae')
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