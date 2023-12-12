//Realiza uma mensagem de advertência via DM para um usuário a mencionar, exigindo um motivo para o mesmo.

const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Seu safadinho, você não tem permissão para usar isso!`)
 
    let membro = message.mentions.users.first()
    if (!membro) return message.reply(`Mencione o membro que deseja enviar a advertência!`)
 
    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`Ei senpai escreva o motivo da advertência.`)
    
    message.delete().catch(O_o => {});
    let avatar = message.author.displayAvatarURL({format: "png"});
    let embed = new Discord.MessageEmbed()
 
    .setTitle(`:warning: Advertência - ${membro.username}`)
    .setColor('#F6070B')
    .setImage("https://i.imgur.com/PSKGSdi.gif")
    .setThumbnail(avatar)
    .setFooter(`Staff responsável: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setDescription(motivo)
 
    membro.send(embed)
    message.channel.send(`:clap: Advertência enviada com sucesso! :clap:`)
 
}
 
exports.help = {
    name: 'warning'
}