let ytdl = require('ytdl-core');


module.exports.run = async (cliet, message, args, Discord) => {

    
    const url = ytdl('https://www.youtube.com/watch?v=mRsxeUscd2U', { filter : 'audioonly', audioonly: true });

  let error = new Discord.RichEmbed()
  .setColor("RED")
  
 if (!message.member.voiceChannel){
   error.setDescription("Entra a un Canal de Voz.")
   return message.channel.send(error); 
 }
    const embed = new Discord.RichEmbed()
    .setDescription("MUA JAJAJAJAJA reproduciendo risas malévolas.")
    .setColor("RED")
    message.channel.send(embed)
   
   message.member.voiceChannel.join()
    .then(connection => {
         const dispatcher = connection.playStream(url)
        .on("end", () => {
          setTimeout (() => {
          message.guild.me.voiceChannel.leave()
        }, 1000)
        })
  }).catch((error) => { console.log(error) 
           message.channel.send("Oh no ocurrio un error.")
}); 
}
