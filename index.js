const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping Recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); //Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const embed = new Discord.MessageEmbed();

client.on("message", message => {
     if (message.author.bot) return;
     if (message.channel.type == "dm") return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error("Erro:" + err);
  } 

});

client.on ("ready", () => {
let activities = [
  `p?comandos`,
  `Fate Grand Order`,
  `Persona 5 Royal`,
  `Xenoblade Chronicles 2`,
  `Fire Emblem Heroes`,
  `Genshin Impact`
],
i = 0;
setInterval(() => client.user.setActivity(`${activities[i ++ % activities.length]}`, {
 type: "PLAYING"
}), 1000 * 60 * 10); //WATCHING, LISTENING, PLAYING, STREAMING
 client.user
  .setStatus("idle") //idle, dnd, online, invisible
  .catch(console.log);
console.log("Estou Online!")
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o TOKEN
