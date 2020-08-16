const { prefix } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot is Live");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "hi":
      if (
        message.member.roles.cache.find((r) => r.id === "546175141642633226")
      ) {
        message.channel.send("yes memer? whats it?.");
      }
      break;
    default:
      message.channel.send(
        "'-' is the prefix for my commands. Get in touch with @JB#9032 for more help."
      );
  }
});

client.login(process.env.TOKEN);
