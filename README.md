# Discord Greeting Bot

A minimal **Node.js bot using discord.js 14**. It listens for the exact message `Hola` and replies with `Hola <username>` in the same conversation.

## Setup

Use Node.js and npm compatible with the checked-in discord.js dependency. From the repository root:

```sh
npm ci
```

Create a local `.env` containing your own bot token:

```dotenv
DISCORD_CLIENT_TOKEN=your_bot_token_here
```

`dotenv` loads this file from the working directory. Keep the token private and run the command from the repository root.

Configure the application as a bot in Discord, enable its Message Content intent, and authorize it for a test server with access to view the channel and send messages. The source requests `Guilds`, `GuildMessages`, and `MessageContent` intents.

## Run and try the greeting

```sh
npm start
```

After login, the console reports the bot's username. Send `Hola` in an accessible server channel to exercise the greeting. Matching is case-sensitive and exact: `hola` or `Hola!` will not trigger this handler. Stop the process with `Ctrl+C`.

Running the bot connects to Discord and can send real replies; there is no dry-run mode.

## Customize and troubleshoot

The complete implementation is in [index.js](index.js). Edit the `messageCreate` condition and reply text to change the greeting. If no reply arrives, check the token, channel permissions, configured intent, and exact message text.

There are no slash commands, database, or web server. The handler does not explicitly ignore messages from other bots, and there is no automated test suite. `node --check index.js` checks syntax without logging in. This documentation update did not connect a bot account or send messages.
