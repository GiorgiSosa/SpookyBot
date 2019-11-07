const Discord = require('discord.js');
let db = require("megadb")
let dulces_db = new db.crearDB("dulces")

module.exports.run = async (client, message, args, Discord) => {
    let total = await dulces_db.ordenar(""+message.guild.id+"", "dulces").catch(r=>null)
    let array = []
    for(var i of total) {
array.push("**USUARIO:** "+client.users.get(i.clave)+" **|** **DULCES:** "+i.valor.dulces)
    }
  console.log(array)
let map = array.map(r=>r)
let embed = new Discord.RichEmbed()
.setDescription(""+map.join("\n\n"))
    .setColor("D07BFF")
message.channel.send(embed)
  setTimeout (() => {
    array= []
  }, 500)
 }
