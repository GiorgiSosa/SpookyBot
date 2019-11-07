const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setColor("D07BFF")
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription("Saludos <@"+message.author.id+">, Felicidades ya que ahora viviras unas grandes experiencias al nivel del miedo. **Feliz Halloween MUA JAJAJAJAJAJAJAJA**")
  .addField("Creadores:", "ImMaxterYT_#0564 y Giorgi#6159")
  .addBlankField(true)
  .addField(":scroll: **| Lista de comandos**", "`'perfil'` | `'dar-dulce'` | `'robar'` | `'comer'` | `'daily'` | '**__top__**'")
  .addField("** **", "`'disfraz'` | `'avatar'` | `'susto'` | `'risa'` | `'historia'`")
  .addField("** **" , "`'set-bio'` | `'setprefix'`")
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL)
  .setImage("https://media.discordapp.net/attachments/636448362681597962/636497942148022272/footerspooky.gif")
  .setThumbnail(client.user.displayAvatarURL)
message.channel.send({embed})
}