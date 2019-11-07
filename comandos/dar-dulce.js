const Discord = require('discord.js');
let db = require("megadb")
let dulces_db = new db.crearDB("dulces")
module.exports.run = async (client, message, args) => {


let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
 
 if(user.user.bot){
   let embed = new Discord.RichEmbed()
   .setDescription("Los **BOT's** no tenemos licencia para recibir esto.")
   .setTimestamp ()
   .setColor('RED')
   .setFooter(message.author.username, message.author.displayAvatarURL)
   return message.channel.send(embed)
   
 }

	if(!user) {
    let embed = new Discord.RichEmbed()
    .setDescription("Debes mencionar a un usuario.")
    .setColor("RED")
    return message.channel.send(embed)
  }

  if(user.id === message.author.id) {
    let embed = new Discord.RichEmbed()
    .setDescription("Debes mencionar a un usuario que no seas tu.")
    .setColor("RED")
    return message.channel.send(embed)
  }
    if(!dulces_db.tiene(`${message.guild.id}.${user.id}.dulces`)) {
      dulces_db.establecer(`${message.guild.id}.${user.id}`, {dulces: 10})
    }else{
      dulces_db.sumar(`${message.guild.id}.${user.id}.dulces`, 1)
      dulces_db.restar(`${message.guild.id}.${message.author.id}.dulces`, 1)
    }

    let dulces = await dulces_db.obtener(`${message.guild.id}.${user.id}.dulces`).catch(r=>console.log(r.code))
    let embed = new Discord.RichEmbed()
    .setDescription("<@"+user.id+"> Has recibido un dulce 🍬 de <@"+message.author.id+">")
    .setTimestamp ()
    .setColor("D07BFF")
    .setFooter("Ahora tienes "+dulces+" dulces.", user.displayAvatarURL)
    .setImage("https://images-ext-2.discordapp.net/external/Kxcy7Ek6pZ1Hr9bF31Afr1-CQn2QCImD_PFeMwUshmI/https/media.discordapp.net/attachments/637408896033488918/639290543549186048/LineaRGB.gif")
  message.channel.send(embed)
 }
