const { prefix, token } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot Live");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "boss":
      if (
        message.member.roles.cache.find((r) => r.id === "744605702189744190")
      ) {
        message.channel.send("yes newbie? whats it?.");
      }
      break;
    default:
      message.channel.send("Get in touch with author of the bot.");
  }
});

client.login(token);