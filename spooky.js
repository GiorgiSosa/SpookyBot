const http = require("http");const express = require("express");const app = express();app.use(express.static("public"));app.get("/", function(request, response) {response.sendFile(__dirname + "/views/index.html");});app.get("/", (request, response) => {response.sendStatus(200);});app.listen(process.env.PORT);setInterval(() => {http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);}, 280000);

//--------------------------------------BOT---------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
let db = require("megadb")
const prefix_db = new db.crearDB("prefixes");

client.on('warn', err => console.warn('[WARNING]', err));

client.on('error', err => console.error('[ERROR]', err));

client.on("ready", () => { 
  
  console.log(`"${client.user.tag}" Está ready para la noche de brujas. 🎃`)

  client.user.setActivity("Noche de brujas", {type: "WATCHING"})
  
});

client.comandos = new Discord.Collection()


fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./comandos/${f}`);
    props.fileName = f;
    props.help ? client.commands.set(props.help.name, props) : null;
  });
});

client.on("message", async (message) => { 

let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : "s!"

const args = message.content.slice(prefix.length).trim().split(/ +/g);

const command = args.shift().toLowerCase()

if (message.author.bot) return;

if (!message.guild || !message.content.startsWith(prefix)) return;
        let cmd =  require(`./comandos/${command}.js`) 
try{
    cmd.run(client, message, args, Discord);
}catch(r){

  console.log(r) //message.channel.send(embed)
}

});

client.login(process.env.TOKEN)