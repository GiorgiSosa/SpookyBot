const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const permission = new Discord.RichEmbed()
    .setDescription("No tienes suficientes permisos.")
    .setColor("RED");
  
  if (message.author.id !== "472684230590070794" && message.author.id !== "489402723180085258") return message.channel.send(permission);
  
  const embed = new Discord.RichEmbed()
    .setDescription("Recargando.")
    .setColor("D07BFF");
  message.channel.send(embed).then(() => {
    client.destroy().then(() => {
      console.clear();
      process.exit();
    });
    client.login(process.env.TOKEN);
  });

}
