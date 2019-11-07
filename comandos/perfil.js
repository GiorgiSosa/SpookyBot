const Discord = require('discord.js');
let Canvas = require("canvas")
let db = require("megadb")
let dulces_db = new db.crearDB("dulces")
let bio_db = new db.crearDB("biografia")
let disfraz = new db.crearDB("drifrazes")
module.exports.run = async (client, message, args) => {

  
  if(!args[0]) {
  let dulces = await dulces_db.obtener(`${message.guild.id}.${message.author.id}.dulces`).catch(r=>console.log(r))
  
  if(!dulces_db.tiene(`${message.guild.id}.${message.author.id}.dulces`)) {
    
    dulces = 0
    
  }
  
    let info = await bio_db.obtener(`${message.guild.id}.${message.author.id}.bio`).catch(r=>console.log(r))
    let a = await disfraz.obtener(`${message.guild.id}.${message.author.id}`).catch(r=>null)
  if(!bio_db.tiene(`${message.guild.id}.${message.author.id}.bio`)) {
    
    info = "No tiene."
    
  }
  
  if(!disfraz.tiene(`${message.guild.id}.${message.author.id}`)) { a = "No tiene."}
  //let bio = await bio_db.obtener(`${message.guild.id}.${message.author.id}.bio`)
  
let canvas = Canvas.createCanvas(800, 331)
let ctx = canvas.getContext('2d')
const img = await  Canvas.loadImage("https://cdn.discordapp.com/attachments/634969082738769951/636228579645980742/55143.jpg")
ctx.drawImage(img, 0, 0, 800, 331)
ctx.font = '32px Arial';
ctx.fillStyle = '#FFFFFF';
ctx.font = '40px "Comic Sans"';
ctx.fillText(`${message.author.username}`, 225, 105)
ctx.fillStyle = '0x000000';
ctx.font = '20px "Comic Sans"';
ctx.fillText("#"+message.author.discriminator, 225, 135)
ctx.fillStyle = "orange";
ctx.font = "bold 30px Sans"
ctx.fillText("Dulces", 60, 216)
ctx.fillText("Biografía", 480, 216)
ctx.fillText("Disfraz", 270, 216)
ctx.fillStyle = "white";
ctx.font = '25px '
ctx.fillText(`${dulces}`, 78, 250)
ctx.fillText(`${info}`, 480, 250)
ctx.fillText(`${a}`, 270, 250)
 
      ctx.beginPath();
      ctx.arc(100, 100, 75, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
       const avatar = await  Canvas.loadImage(message.author.displayAvatarURL)
       ctx.drawImage(avatar, 25, 25, 150, 150);
      const attach = new Discord.Attachment(canvas.toBuffer(), "halloweencard.png")
      
   return message.channel.send(attach)
  
	}else{
  
    let user = message.mentions.users.first() || client.users.get(args[0])
  let dulces = await dulces_db.obtener(`${message.guild.id}.${user.id}.dulces`).catch(r=>console.log(r))
  
  if(!dulces_db.tiene(`${message.guild.id}.${user.id}.dulces`)) {
    
    dulces = 0
    
  }
  
    let info = await bio_db.obtener(`${message.guild.id}.${user.id}.bio`).catch(r=>console.log(r))
  
  if(!bio_db.tiene(`${message.guild.id}.${user.id}.bio`)) {
    
    info = "No tiene."
    
  }
    
let canvas = Canvas.createCanvas(800, 331)
let ctx = canvas.getContext('2d')
const img = await  Canvas.loadImage("https://cdn.discordapp.com/attachments/634969082738769951/636228579645980742/55143.jpg")
ctx.drawImage(img, 0, 0, 800, 331)
ctx.font = '32px Arial';
ctx.fillStyle = '#FFFFFF';
ctx.font = '40px "Comic Sans"';
ctx.fillText(`${user.username}`, 225, 105)
ctx.fillStyle = '0x000000';
ctx.font = '20px "Comic Sans"';
ctx.fillText("#"+user.discriminator, 225, 135)
ctx.fillStyle = '#FFFFFF';
ctx.font = '25px"Comic Sans"';
ctx.fillText("Dulces", 60, 216)
ctx.fillText("Descripcion", 580, 216)
ctx.fillStyle = '0x000000';
ctx.font = '19px '
ctx.fillText(`${dulces}`, 78, 250)
ctx.fillText(`${info}`, 300, 250)
 
      ctx.beginPath();
      ctx.arc(100, 100, 75, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
       const avatar = await  Canvas.loadImage(user.displayAvatarURL)
       ctx.drawImage(avatar, 25, 25, 150, 150);
      const attach = new Discord.Attachment(canvas.toBuffer(), "halloweencard.png")
      
   return message.channel.send(attach)
  
    
  }
}