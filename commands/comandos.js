//Lista os comandos que estão presentes no bot, e conforme eu vou adicionando mais comandos no bot, eu edito a mensagem embed deste aqui.

const Discord = require('discord.js'); 

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
    .setTitle("⠀⠀⠀⠀⠀⠀⠀⠀")
    .setColor(`#c708da`)
    .setFooter("Comando de Ajuda", "https://cdn.discordapp.com/avatars/415316200273215509/eca1743a62885253275fdfe21e811120.png?size=1024")
    .setThumbnail("https://i.imgur.com/YfBt1YQ.jpg")
    .setImage("https://i.imgur.com/v6vbnqm.gif")
    .setAuthor("✨Lista de Comandos:✨", null)
    .addField(">:tada:**DIVERSOS:**", ":crossed_swords:**Atack:**  _Golpeia o usuário desejado._", false)
    .addField("⠀⠀⠀⠀⠀⠀⠀⠀", ":bust_in_silhouette:**Avatar:**  _Consulta a foto de perfil de um usuário._", false)
     .addField("⠀⠀⠀⠀⠀⠀⠀⠀", ":mega:**Say:**  _Faça eu falar o que você desejar._", false)
    .addField("⠀⠀⠀⠀⠀⠀⠀⠀", ":alarm_clock:**Uptime:**  _Veja há quanto tempo estou no ar._", false)
    .addField("⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀", false)
    .addField(">:tools:**MODERAÇÃO:**", ":boom:**Clear:**  _Limpa as mensagens do canal atual. ~~(Somente ADM)~~_", false)
   .addField("⠀⠀⠀⠀⠀⠀⠀⠀", ":warning:**Warning:**  _Envia um texto de advertência via DM para um usuário específico._ ~~(Somente ADM)~~", false)
   .addField("⠀⠀⠀⠀⠀⠀⠀⠀", ":mailbox:**Anúncio:**  _Manda uma mensagem de anúncio em um canal especíco._ ~~(Somente ADM)~~", false)
    .addField("⠀⠀⠀⠀⠀⠀⠀⠀", "**Por enquanto é isso, no futuro caso meu mestre achar necessário, serão adicionados mais comandos.** :flushed:", true)
   await message.channel.send(embed); 
}
