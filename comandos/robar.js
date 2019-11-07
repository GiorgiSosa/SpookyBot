const Discord = require('discord.js');
let db = require("megadb")
let dulces_db = new db.crearDB("dulces")
module.exports.run = async (client, message, args) => {

let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
 
 if(user.user.bot){
   let embed = new Discord.RichEmbed()
   .setDescription("¿De verdad le vas a robar a un bot?")
   .setTimestamp ()
   .setColor('RED')
   .setFooter(message.author.username, message.author.displayAvatarURL)
   return message.channel.send(embed)
   
 }

 let dulces = await dulces_db.obtener(`${message.guild.id}.${user.id}.dulces`)
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
      let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("<@"+user.id+"> No tiene dulces que robar.")
      return message.channel.send(embed)
    }else if (dulces <= 0) {
      let embed = new Discord.RichEmbed()
      .setDescription("<@"+user.id+"> No tiene dulces para robar.")
      .setColor("RED")
      return message.channel.send(embed)
    }
  
  let porciento = Math.floor(Math.random() * 100)
  
  if(porciento > 50){
  
  
      dulces_db.restar(`${message.guild.id}.${user.id}.dulces`, 1)
      dulces_db.sumar(`${message.guild.id}.${message.author.id}.dulces`, 1)
    

   let total2 = await dulces_db.obtener(`${message.guild.id}.${message.author.id}.dulces`).catch(r=>null)
    let embed = new Discord.RichEmbed()
    .setDescription("<@"+message.author.id+"> Te ha **robado** un dulce 🍬 <@"+user.id+">")
    .setTimestamp ()
    .setColor("D07BFF")
    .setFooter(message.author.tag+" Ahora tienes "+total2+" dulces.", message.author.displayAvatarURL)
  message.channel.send(embed)
    
 }else if(porciento < 50) {
   
   dulces_db.restar(`${message.guild.id}.${message.author.id}.dulces`, 1)
   
   setTimeout(async () => {
     let total1 = await dulces_db.obtener(`${message.guild.id}.${message.author.id}.dulces`).catch(r=>null)
   let embed = new Discord.RichEmbed()
   .setDescription("Oh no! Te encontro los policias espanta ladrones y perdiste `1` dulce.")
   .setColor("D07BFF")
   .setTimestamp ()
   .setFooter("Ahora tienes "+total1+" dulces.", message.author.displayAvatarURL)
     return message.channel.send(embed)
  }, 500)
 }
}
