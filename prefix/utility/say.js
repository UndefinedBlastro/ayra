module.exports = {
    name: "say",
    aliases: ["ev", "make"],
    type: "messageCreate",
    code: `
    $onlyIf[$hasPerms[$guildID;$authorID;Administrator];You need Admin perm] $sendMessage[$channelID;$message]
    `,
    unprefixed: false
}
