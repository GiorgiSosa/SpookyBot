const Discord = require('discord.js');
let db = require("megadb")
let dulces = new db.crearDB("dulces")
let disfraz = new db.crearDB("drifrazes")
module.exports.run = async (client, message, args, Discord) => {
  const error = new Discord.RichEmbed() .setColor("D07BFF"); 
  const ok = new Discord.RichEmbed() .setColor("D07BFF");
  
  
  const Aa = new Discord.RichEmbed()
    .setTitle('Historias de terror:')
    .setColor("RED")
    .addField('**\n** **Seleccion:**' ,'~ Para lograr elegir una historia terrorifica debes selecionar el numero del emoji de la historia correspondiente.`')
    .addField('**\n** **Disponibles:**' , '`**[1⃣]** El bosque de **Halloween**.\n**[2⃣]** Fantasma dragon.')
    .addField('**\n** **Cancelar:**' , '`~ Debes selecionar el emoji` :x:`.`')
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL)
  var m = await message.channel.send(Aa)
          await m.react("1⃣")
          await m.react('2⃣')
          await m.react('❌')
        const uno = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id;
        const eliminar = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        const dos = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;
        const a = m.createReactionCollector(eliminar);
       const b = m.createReactionCollector(dos);
        const c = m.createReactionCollector(uno);
       //Eliminar
     a.on("collect", r => {
       r.remove(message.author)
       m.delete(500)
     })
  
c.on('collect', async (r) => {
    r.remove(message.author)
  let embed1 = new Discord.RichEmbed()
    .setTitle('El bosque de **Halloween**.')
    .setColor("RED")
    .setDescription("Había una vez en un bosque lejano unos chicos llamados Cráter y ManU los cuales andaban buscando dulces de casa en casa cuando de pronto un muñeco desconocido salto de los arbustos y amenazó en raptarlos si no hacían lo que le pedían, y los niños muy asustados no tuvieron más opción que hacerle caso al desconocido, entonces a partir de ahí lo niños empezaron a trabajar en equipo para poder robar casas robaron y robaron muchas casas hasta que en un momento se ropesaron con una casa de policía y al ver el policía los niños se negaron al intento de robar la casa del policía porque ya sabían que los ivan a atrapar lo cual fue lo sucedido y también atraparon al villano y se devolvieron todas las pertenencias robadas a sus respectivas casas.")
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL)
    m.edit(embed1)
})
b.on('collect', async (r) => {
    r.remove(message.author)
  let embed2 = new Discord.RichEmbed()
    .setTitle('El bosque de **Halloween**.')
    .setColor("RED")
    .setDescription("Anita era una niña que creía firmemente en la existencia de los fantasmas y al acercarse la Noche de Brujas o Halloween, solo quería al salir a buscar golosinas, con la esperanza de encontrar a un terrorífico fantasma para pasar un buen \"susto\". Sobra decir que Anita era amante de los cuentos de terror.\n\nLa noche del 31 de Octubre, se disfrazó y con sus amiguitas se fue a conseguir muchos dulces y tal vez... ¿alguna aventura? Cuando volvió a casa, después de cenar y de quitarse el disfraz, buscó un buen escondite donde guardar todas las golosinas que había recolectado, procurando, eso sí, que nadie la viera, porque no quería compartirlas con nadie. Pronto se durmió. A medianoche, un ruidito la despertó, asomó la cabeza por encima de las sábanas y cual fue su sorpresa al observar que lo que había a los pies de su cama era nada más y nada menos que… ¡un fantasma!\n\nTodo blanco, se deslizaba flotando. Anita observaba atentamente y casi sin respirar. De repente, el fantasma desapareció de su vista con un ruído de papel que se arruga con las manos. Por la mañana corrió a contar a su familia lo ocurrido la noche anterior. Su madre intentaba en vano convencerla de que habría sido un sueño, pero Anita logró que su padres subieran con ella hasta su cuarto. Una vez allí, Anita les enseñó dónde lo había visto… y, ¡oh, sorpresa!\n\n¡Su escondite había sido saqueado! Ya no estaban allí sus caramelos, ni sus chocolates, ni sus galletas, conseguidas con tanto esfuerzo la tarde anterior. ¿Habría sido el fantasma? ¿Los fantasmas comen chocolate y golosinas? Hoy… 22 años después, Anita aún no conoce la respuesta, y los científicos no han podido confirmar en qué consiste la dieta de un fantasma. Lo que Anita sí sabe es que si aquél día hubiera compartido sus dulces con sus papás y sus hermanos, no se habría quedado sin ellos, así que… este Halloween compartid vuestras chuches con quien podáis, ¡no vaya a ser que vuelva el fantasma tragón y se los coma!")
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL)
    m.edit(embed2)
})
}
