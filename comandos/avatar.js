const Discord = require('discord.js');
var Weez = require("weez");
var weez = new Weez.WeezAPI("p6YP4nnxij2P56CE3vTTqvLuxT4IFzR5WSPC");
module.exports.run = async (client, message, args) => {


  if(!args[0]) {
  let user = message.author 
  let fotoa = await weez.rainbow(message.author.displayAvatarURL)
  const test = new Discord.Attachment(fotoa, "bla.png")
  const embed = new Discord.RichEmbed()      
  .setImage("attachment://bla.png")
  .attachFile(test)
  .setColor("D07BFF")
  .setDescription(`:performing_arts: **|** <@${user.id}> Fue atacado por un\narcoiris y terminó así.`)

message.channel.send(embed);
      
    }else{   
    let user = message.mentions.users.first() || client.users.get(args[0])
    let fotoa = await weez.rainbow(user.displayAvatarURL)
    const test = new Discord.Attachment(fotoa, "bla.png")
    const embed = new Discord.RichEmbed()      
    .setImage("attachment://bla.png")
    .attachFile(test)
    .setColor("D07BFF")
    .setDescription(`:performing_arts: **|** <@${user.id}> Fue atacado por un\narcoiris y terminó así.`)


message.channel.send(embed);
}
}