const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { MessageAttachment2 } = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const { msg } = require('discord.js');

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

const activities_list = [
    "North Track", 
    "Donkk Track",
    "Harrison Derby", 
    "Nightmare Land"
    ];
  
bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 5000); // Runs this every 5 seconds.
  });

//--------------------------------


bot.on('message', message => {
  // If the message is "$north-track"
  if (message.content === '$north-track') {

      const embed = new MessageEmbed()
      .setTitle('SRDR North Track')  
      .setURL('https://steamcommunity.com/sharedfiles/filedetails/?id=2166832463')
      .setColor('#ffc90e')
      .setThumbnail('https://file.coffee/u/I137hILuT.png')
      .addFields(
        { name: 'Description', value: 'The north track is a fast rally through the trees.\n The extreme speeds of this track makes jumps extra dangerous 🔥' },
        { name: 'Spawn', value: 'You can spawn your car at the terminal' },
        /// { name: '\u200B', value: '\u200B' },
      )
      .setImage('https://file.coffee/u/BaiNbeabe.png')
      .setTimestamp()
      .setFooter('SRDR Bot © 2020');
    
        if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.send(embed)
        } else {
          message.channel.send('Sorry, you cant use that command, If you believe this is an error contact an Admin')
        }
      };
})

bot.on('message', message => {
  // If the message is "$donkk-track"
  if (message.content === '$donkk-track') {

      const embed = new MessageEmbed()
      .setTitle('SRDR Donkk Track')  
      .setURL('https://steamcommunity.com/sharedfiles/filedetails/?id=2166832463')
      .setColor('#ffc90e')
      .setThumbnail('https://file.coffee/u/I137hILuT.png')
      .addFields(
        { name: 'Description', value: 'The donkk track is a variation of hell, is very difficult on the beginning, where the driver has to speed through trees with rough terrain, jumps, and quick turns.\n If one doesn`t practice this track before the race, the chances of the same even completing it, are extremally low. So good luck, and drive fast.' },
        { name: 'Spawn', value: 'You can spawn your car at the hangar' },
        /// { name: '\u200B', value: '\u200B' },
    )
    .setImage('https://file.coffee/u/sxGFRZzXs.png')
    .setTimestamp()
    .setFooter('SRDR Bot © 2020');
    
        if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.send(embed)
        } else {
          message.channel.send('Sorry, you cant use that command, If you believe this is an error contact an Admin')
        }
      };
})

bot.on('message', message => {
  // If the message is "$harrison-track"
  if (message.content === '$harrison-track') {

      const embed = new MessageEmbed()
      .setTitle('SRDR Harrison Track')  
      .setURL('https://steamcommunity.com/sharedfiles/filedetails/?id=2171122100')
      .setColor('#ffc90e')
      .setThumbnail('https://file.coffee/u/I137hILuT.png')
      .addFields(
        { name: 'Description', value: 'A small track for beginners. It`s a rough jumpy track until the north bridge.\n Then it will be a series of streight lines to finish it back at Harrison.\n The car recommended for this needs a very good max speed but also good suspension for the jumpy start, do NOT go max on the first jumps is my advice, hardly any car can handle those.' },
        { name: 'Spawn', value: 'You can spawn your car at the hangar' },
        /// { name: '\u200B', value: '\u200B' },
    )
    .setImage('https://file.coffee/u/fKiDx24J0.png')
    .setTimestamp()
    .setFooter('SRDR Bot © 2020');
    
        if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.send(embed)
        } else {
          message.channel.send('Sorry, you cant use that command, If you believe this is an error contact an Admin')
        }
      };
})


bot.on('message', message => {
  // If the message is "$donkk-track2"
  if (message.content === '$donkk-track2') {

      const embed = new MessageEmbed()
      .setTitle('SRDR Donkk Track')  
      .setURL('https://steamcommunity.com/sharedfiles/filedetails/?id=2173283456')
      .setColor('#ffc90e')
      .setThumbnail('https://file.coffee/u/I137hILuT.png')
      .addFields(
        { name: 'Description', value: 'This is an easy track around the isle of donkk, the track is around the main highway counting with a tunnel and up hill climbs.' },
        { name: 'Spawn', value: 'You can spawn your car at the hangar' },
        /// { name: '\u200B', value: '\u200B' },
    )
    .setImage('https://media.discordapp.net/attachments/735113327084175410/735113861648089129/unknown.png?width=681&height=703')
    .setTimestamp()
    .setFooter('SRDR Bot © 2020');
    
        if (message.member.hasPermission("ADMINISTRATOR")) {
          message.channel.send(embed)
        } else {
          message.channel.send('Sorry, you cant use that command, If you believe this is an error contact an Admin')
        }
      };
})