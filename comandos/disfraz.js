const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
let db = require("megadb")
let dulces = new db.crearDB("dulces")
let disfraz = new db.crearDB("drifrazes")
module.exports.run = async (client, message, args, Discord) => {
  const total = await dulces.obtener(`${message.guild.id}.${message.author.id}.dulces`).catch(r=>null)
  const error = new Discord.RichEmbed() .setColor("D07BFF"); 
  const ok = new Discord.RichEmbed() .setColor("D07BFF");
  
  if(!dulces.tiene(`${message.guild.id}.${message.author.id}.dulces`)) total = 0
  
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 8;
  ctx.arc(256, 300, 120, 0, 70);
  ctx.stroke();
  ctx.closePath();
  ctx.clip();
  
  const avatar = await loadImage(message.author.displayAvatarURL);
  ctx.drawImage(avatar, 130, 179, 245, 245);
  ctx.restore();
  
  const bruja = await loadImage('https://i.imgur.com/IlPdY4E.png');
  const vaquero = await loadImage('https://i.pinimg.com/originals/03/95/be/0395bee2768b2ac5b38f2a34bf580ac0.png');
  //const vaquero_2 = await loadImage('https://i.ibb.co/gwqbztF/sheriff-pngrepo-com.png');
  const joker = await loadImage('https://i.imgur.com/NUgg8SH.png');
  const santa = await loadImage('https://i.imgur.com/27AUiob.png');
  const Flash = await loadImage('https://i.ibb.co/PZ1NsKc/Flash.png');
  const deadpool = await loadImage('https://i.ibb.co/sQC5J4S/DeadPool.png');
  const calabaza = await loadImage('https://i.ibb.co/30cFD4g/calabaza.png');
  const Aa = new Discord.RichEmbed()
    .setTitle('¡Elige el disfraz!')
    .setColor("D07BFF")
    .addField('**\n** **Disfrazar:**' ,'`~ Debes escribir el nombre del disfraz que deseas en el chat.`')
    .addField('**\n** **Disponibles:**' , '`vaquero` = 3 dulces\n`joker` = 6 dulces\n`deadpool` = 8 dulces\n`santa` = 2 dulces\n`flash` = 4 dulces\n`calabaza` = 3 dulces\n`bruja` = 5 dulces')
    .addField('**\n** **Cancelar:**' , '`~ Debes escribir cancel en el chat para cancelar todo.`')
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL)
  message.channel.send(Aa)
  const filter = m => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector(filter, { time: 15000 });
  
  collector.on('collect', m => {
    
    if(m.content.toLowerCase() === 'bruja') {
  
    if(total <  5) {
error.setDescription("No tienes suficientes dulces para esto.")
return message.channel.send(error)
}
      
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "🌬️ Bruja")
      dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 5)
        ctx.drawImage(bruja, 130, 1, 256, 256);
        const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
        const embed = new Discord.RichEmbed()
          .attachFile(at)
          .setImage("attachment://disfraz.png")
          .setColor('PURPLE')
          .setDescription(`Te has disfrazado de **Bruja**! 🧙‍`)
        message.channel.send(embed).then(async (msg) => {
          await msg.react('👻');
        });
        collector.stop()
      
    } else if(m.content.toLowerCase() === 'calabaza'){
      
      if(total < 3) {
error.setDescription("No tienes suficientes dulces para esto.")
return message.channel.send(error)
}
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "🎃Calabaza")
      dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 3)
      
        ctx.drawImage(calabaza, 110, 60, 290, 260);
        const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
        const embed = new Discord.RichEmbed()
          .attachFile(at)
          .setImage("attachment://disfraz.png")
          .setColor('ORANGE')
          .setDescription(`Te has disfrazado de **Calabaza**! 🎃`)
        message.channel.send(embed).then(async (msg) => {
          await msg.react('🎃');
        });
        collector.stop()
      
    } else if(m.content.toLowerCase() === 'vaquero'){
      
      if(total <  3) {
error.setDescription("No tienes suficientes dulces para esto.")
return message.channel.send(error)
}
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "🤠Vaquero")
      dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 3)
        ctx.drawImage(vaquero, 90, 20, 320, 260);
        ctx.drawImage(vaquero_2, 270, 240, 90, 90)
        const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
        const embed = new Discord.RichEmbed()
          .attachFile(at)
          .setImage("attachment://disfraz.png")
          .setColor('ORANGE')
          .setDescription(`Te has disfrazado de **Vaquero**! 🤠`)
        message.channel.send(embed).then(async (msg) => {
          await msg.react('🤠');
        });
        collector.stop()
      
    } else if(m.content.toLowerCase() === 'joker') {
      
      if(total < 6) {
        error.setDescription("No tienes suficientes dulces para esto.")
        return message.channel.send(error)
      }
      dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 6)
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "🤡Joker")
        ctx.drawImage(joker, 130, 160, 256, 256);
        const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
        const embed = new Discord.RichEmbed()
          .attachFile(at)
          .setImage("attachment://disfraz.png")
          .setColor('RED')
          .setDescription(`Te has disfrazado de **Joker**! 🤡`)
        message.channel.send(embed).then(async (msg) => {
          await msg.react('🤡');
        });
        collector.stop()
      
    } else if(m.content.toLowerCase() === 'deadpool') {
      
      if(total < 8) {
error.setDescription("No tienes suficientes dulces para esto.")
return message.channel.send(error)
}dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 8)
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "🔫 Deadpool")
      ctx.drawImage(deadpool, 90, 172, 336, 255)
      const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
      const embed = new Discord.RichEmbed()
        .attachFile(at)
        .setImage("attachment://disfraz.png")
        .setColor('RED')
        .setDescription(`Te has disfrazado de **DeadPool** 🦸‍`)
      message.channel.send(embed).then(async (msg) => {
        await msg.react('👻');
      })
      collector.stop()
      
    } else if(m.content.toLowerCase() === 'flash') {
  
      if(total < 4) {
error.setDescription("No tienes suficientes dulces para esto.")
return message.channel.send(error)
}dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 4)
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "⚡Flash")
      ctx.drawImage(Flash, 115, 130, 280, 300)
      const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
      const embed = new Discord.RichEmbed()
        .attachFile(at)
        .setImage("attachment://disfraz.png")
        .setColor('RED')
        .setDescription(`Te has disfrazado de **Flash** ⚡`)
      message.channel.send(embed).then(async (msg) => {
        await msg.react('⚡');
      })
      collector.stop()
      
    } else if(m.content.toLowerCase() === 'santa') {
      
      if(total <  2) {
error.setDescription("No tienes suficientes dulces para esto.")
return message.channel.send(error)
}
      disfraz.establecer(`${message.guild.id}.${message.author.id}`, "🎅 Santa")
      dulces.restar(`${message.guild.id}.${message.author.id}.dulces`, 2)
      ctx.drawImage(santa, 150, 80, 260, 200);
      const at = new Discord.Attachment(canvas.toBuffer(), "disfraz.png");
      const embed = new Discord.RichEmbed()
        .attachFile(at)
        .setImage("attachment://disfraz.png")
        .setColor('RED')
        .setDescription(`Te has disfrazado de **Santa**! 🎅`)
        message.channel.send(embed).then(async (msg) => {
          await msg.react('🎅');
        });
        collector.stop()
      
    } else if(m.content.toLowerCase() === 'cancel') {
      
      ok.setDescription(`Vaya, parece que los __disfraces__ no son lo tuyo no**?**`)
      message.channel.send(ok)
      collector.stop()
      
    }
    
  }); 
}
