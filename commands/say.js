//Comando que faz com que o bot fale o que você desejar, apagando logo em seguida a mensagem do comando.

const Discord  = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};
