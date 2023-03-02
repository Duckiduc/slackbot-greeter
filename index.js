require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: process.env.SOCKET_MODE === "true",
  appToken: process.env.APP_TOKEN,
  port: process.env.PORT || 3000,
});

const greetings = {
  night: "Good night!",
  morning: "Good morning!",
  afternoon: "Good afternoon!",
  evening: "Good evening!",
};

app.command("/greet", async ({ command, ack, say }) => {
  try {
    await ack();
    const currentHour = new Date().getHours();
    const timeOfDay = (() => {
      if (currentHour < 6 || currentHour >= 22) {
        return "night";
      }
      if (currentHour < 12) {
        return "morning";
      }
      if (currentHour < 18) {
        return "afternoon";
      }
      return "evening";
    })();
    await say(greetings[timeOfDay]);
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
