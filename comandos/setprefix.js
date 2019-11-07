const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const prefix_db = new db.crearDB("prefixes");

module.exports.run = async (client, message, args) => {
    let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "s!"
  

let prefijo = args[0] 
let permisos = message.member.hasPermission("ADMINISTRATOR")
    const embed1 = new Discord.RichEmbed()
    .setDescription("No tienes el permiso de `Administrador`.")
    .setColor("RED")
    if(!permisos) return message.channel.send(embed1)
    const embed = new Discord.RichEmbed()
    .setDescription("Debes ingresar el nuevo prefijo.")
    .setColor("RED")
  if(!prefijo) return message.channel.send(embed)
      
    
  let embed0 = new Discord.RichEmbed()
        .setDescription("No puedes pasarte de los `8` caracteres.")
        .setColor("RED")
    if(prefijo.length > 8) return message.channel.send(embed0)
  
  if(prefix === prefijo){
          const embed0 = new Discord.RichEmbed()
        .setDescription("Ese prefijo ya estaba establecido.")
        .setColor("RED")
          return message.channel.send(embed0)
  }
  
  prefix_db.establecer(`${message.guild.id}`, prefijo)
    let embed2 = new Discord.RichEmbed()
    .setDescription("Prefijo establecido a `"+prefijo+"`")
    .setColor("D07BFF")
    message.channel.send(embed2)
}