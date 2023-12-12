//Apenas um comando para servir de exemplo de como fazer um sistema de auto-resposta.

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const m = await message.channel.send("pipoca");
  m.edit(
    `**Quentinha na manteiga?** `
  );
};
