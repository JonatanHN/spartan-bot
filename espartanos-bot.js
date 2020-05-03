const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
   console.log("SpartanBot Online Sucessfully!!!");
});
var prefix = config.prefix;
client.on("message", (message) => {
if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;
 // Comandos
  if (message.content.startsWith(prefix + "Servidor")) {
    message.channel.send("spartanosrp.tk:7777");
  }if (message.content.startsWith(prefix + "Website")) {
    message.channel.send("www.spartanosrp.tk");
  }if (message.content.startsWith(prefix + "Administracion")) {
    message.channel.send("FOX,SHADOW,RYAN,JONATANHN");
  }if (message.content.startsWith(prefix + "fox")) {
    message.channel.send("Es el peor admin, ademas de oler a kk y dice JonatanHN que Webos pal fox foreber!!!");
  }
});
client.login(config.token);   