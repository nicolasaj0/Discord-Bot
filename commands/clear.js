//Limpa até 99 mensagens por comando, porém somente mensagens enviadas nos últimos 14 dias apartir da data que você realizar o comando.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Eu ainda não lhe reconheci como mestre!!!"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "Ei onni-chan, forneça um número de no **máximo 99 mensagens** para eu limpá-las para você ^^"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas nesse chat! :3**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Ei mestre... Não foi possível deletar mensagens devido a: ${error}`)
    );
};