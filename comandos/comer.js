const Discord = require('discord.js');
const db = require('megadb');
let dulcesdb = new db.crearDB("dulces")
module.exports.run = async (client, message, args, Discord) => {
  
  let user = message.author
  let dulces = await dulcesdb.obtener(`${message.guild.id}.${message.author.id}.dulces`).catch(r=>console.log(r))
  if(!dulcesdb.tiene(`${message.guild.id}.${message.author.id}.dulces`)) {
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("No tienes suficientes dulces.")
    return message.channel.send(embed)
  }else if(dulces <= 0) {
    let embee = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("No tienes suficientes dulces.")
    return message.channel.send(embee)
  }
  
  dulcesdb.restar(`${message.guild.id}.${message.author.id}.dulces`, 1)
    let listo = new Discord.RichEmbed()
    .setDescription("<@"+message.author.id+"> eres el moustro come **dulces**, te comiste `"+1+"` dulce.")
   .setFooter("Ahora te quedan "+dulces+" dulces.", message.author.displayAvatarURL)
    .setColor("D07BFF")
    .setTimestamp()
    message.channel.send(listo);
  }
