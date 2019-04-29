const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on('message', message => {
    if(message.content.startsWith("."))
    if(!message.member.roles.some(r=>["bot-user"].includes(r.name)) )
        return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
})
client.login(process.env.BOT_TOKEN);
