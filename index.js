const { ForgeClient } = require("forgescript")
const { ForgeDB } = require("forgedb")


const client = new ForgeClient({
    intents: [ // intents, add or remove based on your needs
        "Guilds",
        "MessageContent",
		"GuildMessageReactions", 
        "GuildMessages",
        "GuildMembers",
        "DirectMessages",
        "GuildInvites",
        "GuildModeration",
        "GuildVoiceStates"
    ],
    events: [ 
        "channelCreate",
        "channelDelete",
        "channelUpdate",
        "debug",
        "emojiCreate",
        "emojiDelete",
        "emojiUpdate",
        "error",
        "guildAuditLogEntryCreate",
        "guildCreate",
        "guildDelete",
        "guildMemberAdd",
        "guildMemberRemove",
        "guildMemberUpdate",
        "guildUpdate",
        "interactionCreate",
        "inviteCreate",
        "inviteDelete",
        "messageCreate",
        "messageDelete",
        "messageReactionAdd",
        "messageReactionRemove",
        "messageUpdate",
        "ready",
        "roleCreate",
        "roleDelete",
        "roleUpdate",
        "shardDisconnect",
        "shardError",
        "shardReady",
        "shardReconnecting",
        "shardResume",
        "userUpdate",
        "voiceStateUpdate",
    ],
    useInviteSystem: true, // if you will track invites, put this to true, and keep the GuildInvites intent
    prefixes: [
        ".",  // your bot's prefix or prefixes
    ],
    restrictions: {
    },
    extensions: [ // extensions below, if any.
        new ForgeDB(),
    ]
})

client.commands.load("./prefix")
client.applicationCommands.load("./slash")

// This part puts something on the console once bot is online
client.commands.add({
    type: "ready",
    code: `
  
    $setStatus[online;Streaming;Ayra MC;;https://www.twitch.tv/undefinedblastro]
    $log[- Bot $username[$botID] ID "$botID" is online!]
    `
})

// Change "Your bot token" by your bot token.
client.login("MTA5MDU2NzE4ODIyNzgxNzUyMw.GRh4RQ.Co4z94h2XoAo5ltrgiHI0iGVyfSHmfUq6IojI8");
