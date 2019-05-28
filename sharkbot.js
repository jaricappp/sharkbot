const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if(cmd === "say") {
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage);
  }
        if(cmd === "destroy") {
        if(!message.member.roles.some(r=>["bot-user"].includes(r.name)) )
            return message.channel.send("Negative.");
            message.delete().catch(O_o=>{}); 
            client.destroy()
  }
});

client.login(process.env.BOT_TOKEN);
