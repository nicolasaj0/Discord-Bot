//Comando de interação, que ataca o usuário mencionado pelo autor com um gif ilustrativo.

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/fvbbsOd.gif',
  'https://i.imgur.com/k1IzdXm.gif',
  'https://i.imgur.com/Zw8jyoF.gif',
  'https://i.imgur.com/aKZ4D0l.gif',
  'https://i.imgur.com/wntVxlZ.gif',
  'https://i.imgur.com/i7QcBVD.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Ei onii-chan,lembre-se de mencionar um usuário válido para espancar!');
}
/*
message.channel.send(`${message.author.username} **acaba de espancar** ${user.username}! :rage:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Ihhhhh eu não deixava ein :O')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de atacar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Só pra ficar esperto')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
