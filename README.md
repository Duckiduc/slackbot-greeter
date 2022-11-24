# SlackBot Greeter [Experiment — WIP]
  
Basic "**TEMPLATE**" project to learn to **create a Slack Bot** from A to Z using the Slack API, the Bolt.js framework and Node.js.  

This includes documentation for setting up your Bot on Slack's website.

# [Slack API](https://api.slack.com/apps)

<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" height="150px">

Connect, simplify, and automate your work with Slack apps.

### Create Slack App

- Go to [https://api.slack.com/apps](https://api.slack.com/apps) > _Create New App_ > _From scratch_
- Enter your **App Name** and pick a **Workspace** you want to develop our bot in

---

### Add necessary permissions

- In the _Basic information_ tab, go to _App-Level Tokens_ and generate a **new Token**.
- Enter a **Token Name** (e.g. _authToken_)
- Add the scopes you want your Token to access

> For this project I added `connections:write`, `authorizations:read`, `app_configurations:write`

- Go to _OAuth & Permissions_ and in the _Scopes_ section add the following **OAuth scopes** for the _Bot Token Scopes_

> `app_mentions:read`, `chat:write`, `chat:write.customize`, `commands`, `im:history`, `im:read`, `im:write`

- Go to the _Event Subscriptions_ tab and enable **Events**
- In _Subscribe to bot events_ add the _Bot User Event_ `message.im`
- Enable **Socket Mode** in the _Socket Mode_ tab

---

### Add support for Slack command `/greet`

- Go to the _Slash Commands_ tab
- Create a new command and enter `/greet` in the _Command_ field — feel free to enter whatever you want in the other fields

### Add your Slack App/Bot to workspace

- In the _Basic Information_ tab, go to _Install your app_ and click on **Install to Workspace**

### Retrieve credentials

```
TOKEN="BOT USER OAUTH TOKEN", //Oauth  & Permissions tab
SIGNING_SECRET="SIGNING SECRET", //Basic Information tab
SOCKET_MODE="true",
APP_TOKEN="SOCKET TOKEN" //App-level Token
PORT="3000"
```

# [Bolt.js](https://slack.dev/bolt-js/tutorial/getting-started)

<img align="right" src="https://a.slack-edge.com/90e9e3/img/api/bolt/bolt-js-logo.svg" height="150px">

## Start the project

### Install dependencies

Run `npm i`

> Make sure you have Node.js installed

---

### Add credentials to project

Create a `.env` file based on the `.env.defaults` file and fill it with your credentials

---

### Start project

Run `node index.js`

---

## Use the Bot

For now you can:

- Direct message the bot with a message containing the world `hello` and it will greet you back
- Use the `/greet` command inside your conversation with the bot and it will greet you according to the current time of the day
