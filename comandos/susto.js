const Discord = require('discord.js');
var Weez = require("weez");
var weez = new Weez.WeezAPI("QE9xWU5uAyR2nh8D8GGbyONMRKlzmyRJAIQW");

module.exports.run = async (client, message, args) => {


const embed = new Discord.RichEmbed()

let member = message.mentions.users.first()

if (!member){
    let embed = new Discord.RichEmbed()
    .setDescription("Debes mencionar a un usuario")
    .setColor("RED")
    return message.channel.send(embed)
}
let img = await weez.susto(member.displayAvatarURL)
 
message.channel.send({files: [img]})

}
