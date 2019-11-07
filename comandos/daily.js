const Discord = require('discord.js');
let db = require("megadb")
let dulces_db = new db.crearDB("dulces")
let cooldown = new Set()


module.exports.run = async (client, message, args, Discord) => {

if(cooldown.has(message.author.id)){
  
  let embed = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription("Espera el enfriamiento de 15m")
  
  return message.channel.send(embed)
}

cooldown.add(message.author.id);

setTimeout(() => {
  cooldown.delete(message.author.id);
}, 900000);
  
  let user = message.author;
let random = Math.floor(Math.random() * 5)
    if(!dulces_db.tiene(`${message.guild.id}.${user.id}.dulces`)) {
      dulces_db.establecer(`${message.guild.id}.${user.id}`, {dulces: 10})
    }else{
      dulces_db.sumar(`${message.guild.id}.${user.id}.dulces`, random)
    }

    let dulces = await dulces_db.obtener(`${message.guild.id}.${user.id}.dulces`).catch(r=>console.log(r.code))
    let embed = new Discord.RichEmbed()
    .setDescription("<@"+user.id+"> ¡Increíble has obtenido `"+random+"`!")
    .setTimestamp ()
    .setColor("D07BFF")
    .setFooter("Ahora tienes "+dulces+" dulces.", user.displayAvatarURL)
  message.channel.send(embed)
 }
