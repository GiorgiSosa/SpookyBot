const Discord = require('discord.js');
let db = require("megadb")
let bio_db = new db.crearDB("biografia")
module.exports.run = async (client, message, args) => {
 let texto = args.join(" ")
 if(!texto) {

    let embed = new Discord.RichEmbed()
    .setDescription("Debes ingresa una descripcion.")
    .setColor("RED")
    return message.channel.send(embed)

}
  if(texto.length > 20) {

    let embed = new Discord.RichEmbed()
    .setDescription("Debes ingresa algo de max. 20 caracteres")
    .setColor("RED")
    return message.channel.send(embed)

}

  bio_db.establecer(`${message.guild.id}.${message.author.id}`, {bio: texto})
  let embed = new Discord.RichEmbed()
  .setDescription("**BIOGRAFIA**\n<@"+message.author.id+"> ahora tu biografia es:\n\n"+texto)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter(client.user.username, client.user.displayAvatarURL)
  .setTimestamp ()
  .setColor("D07BFF")
  message.channel.send(embed)
}

