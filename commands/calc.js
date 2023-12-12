const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  if (!args[0]) return message.channel.send('Por favor, insira um cálculo.');

  let resp;
  try {
    resp = math.evaluate(args.join(' '));
    } catch (e) {
      return message.channel.send('Me desculpe, mas você poderia inserir um cálculo válido?');
    }
  const embed = new Discord.MessageEmbed()
  .setColor(0xffffff)
  .setThumbnail('https://media.giphy.com/media/8OYEgPjNLMmg7YMK9G/giphy.gif')
  .setTitle('Calculadora do Discord')
  .addField('Cálculo:', `\`\`\`js\n${args.join('')}\`\`\``)
  .addField('Resposta:', `\`\`\`js\n${resp}\`\`\``)

 message.channel.send(embed);

}