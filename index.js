require('dotenv').config()
const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.TOKEN,
    signingSecret: process.env.SIGNING_SECRET,
    socketMode: (process.env.SOCKET_MODE === "true"),
    appToken: process.env.APP_TOKEN,
    port: process.env.PORT || 3000
});

app.command("/greet", async ({ command, ack, say }) => {
  try {
    await ack();
    let txt = command.text
    await say("Hello there!")
  } catch (error) {
    console.log("err")
    console.error(error);
  }
});

app.message(/hello/, async ({ message, say }) => {
  try {
    say(`Hey there <@${message.user}>!`);
  } catch (error) {
      console.log("err")
    console.error(error);
  }
});

(async () => {
  await app.start();
  console.log(`⚡️ Slack Bolt app is running on port ${process.env.PORT || 3000}!`);
})();
