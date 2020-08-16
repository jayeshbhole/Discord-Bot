const { prefix } = require("./config.json");
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
    case "hi":
      if (
        message.member.roles.cache.find((r) => r.id === "546175141642633226")
      ) {
        message.channel.send("yes memer? whats it?.");
      }
      break;
    default:
      message.channel.send("Get in touch with author of the bot.");
  }
});

client.login(process.env.TOKEN);
