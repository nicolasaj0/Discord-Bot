//Manda uma mensagem em embed para um canal específico do servidor, exigindo a menção do canal, o texto do anúncio e o título por mensagem.

const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Infelizmente você não possui permissão para isso =/ .`)
 
    message.channel.send(`Em qual canal será realizado o anúncio?`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                message.reply(`Ei senpai, lembre-se de mencionar o canal!`)
            } else {
                message.channel.send(`Qual a mensagem desse anúncio?`).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                   
                        message.channel.send(`Qual o título do anúncio?`).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content
 
                                message.channel.send(`Yaaaay! Anúncio enviado ao canal ${canal} com sucesso ^^`)
                                
            let avatar = message.guild.iconURL({format: "png"});
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('#F60762')
                                .setFooter(`Anúncio realizado por: ${message.author.tag}`,
    message.author.displayAvatarURL({format: "png"}))
                                .setImage("https://i.imgur.com/Orulwr8.gif")
                                .setThumbnail(avatar)
                                .setTitle(title)
                                .setDescription(desc)
 
                                canal.send(embed)
 
                            })
                        })
                    })
                })
            }
        })
    })
 
}
 
exports.help = {
    name: 'anúncio'
}
