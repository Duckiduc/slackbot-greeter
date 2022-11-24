require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: process.env.SOCKET_MODE === "true",
  appToken: process.env.APP_TOKEN,
  port: process.env.PORT || 3000,
});

app.command("/greet", async ({ command, ack, say }) => {
  try {
    await ack();
    const currentHour = new Date().getHours();
    if (currentHour < 6) {
      await say("Good night!");
    } else if (currentHour < 12) {
      await say("Good morning!");  
    } else if (currentHour < 18) {
      await say("Good afternoon!");
    } else if (currentHour < 22) {
      await say("Good evening!")
    } else {
      await say("Good night!");
    }
    let txt = command.text;
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

app.message(/hello/, async ({ message, say }) => {
  try {
    say(`Hey there <@${message.user}>!`);
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

(async () => {
  await app.start();
  console.log(
    `⚡️ Slack Bolt app is running on port ${process.env.PORT || 3000}!`
  );
})();
