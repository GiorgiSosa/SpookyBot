var util = require("util");
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const h = require('hastebin-generator');
module.exports.run = async (client, message, args) => {

  if (message.author.id !== '489402723180085258' && message.author.id !== "472684230590070794") return;
      
    try {
            let codein = args.join(" ");
            let code = eval(codein);
            let asd = typeof(code)
            code = require('util').inspect(code, { depth: 0 });
            let txt = "" + code;
            let limit = 1024;
      
        if (txt.length > limit) return h(txt, 'js').then(p => {
        let embed = new Discord.RichEmbed()
        .addField('📥 **| ENTRADA**', `\`\`\`js\n${codein}\`\`\``)
        .addField('📤 **| SALIDA**', `[Click Here](${p})`)
        .addField("📟 **| TIPO**", `\`\`\`\n${asd}\`\`\``.replace("number", "Number").replace("object", "Object").replace("string", "String").replace(undefined, "Undefined").replace("boolean", "Boolean"), true)
        message.channel.send(embed)
        });
        let embed = new Discord.RichEmbed()
        .addField('📥 **| ENTRADA**', `\`\`\`js\n${codein}\`\`\``)
        .addField('📤 **| SALIDA**', `\`\`\`js\n${code}\n\`\`\``.replace(client.token, "Contenido privado"))
        .addField("📟 **| TIPO**", `\`\`\`\n${asd}\`\`\``.replace("number", "Number").replace("object", "Object").replace("string", "String").replace(undefined, "Undefined").replace("boolean", "Boolean"), true) 
        message.channel.send(embed)
    }
      catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}