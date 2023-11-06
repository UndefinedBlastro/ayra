module.exports = {
    name: "afk",
    type: "messageCreate",
    code: `
    $sendMessage[$channelID;$title[AFK set] $description[I have marked you as AFK in server, with reason:$message] $footer[$username;$userAvatar[$authorID]] $color[#c1baff]]$setVar[afkname;$authorID;$nickname[$guildID;$authorID]] $function[$memberSetNickname[982931539941818408;$authorID;{afk}$nickname]] $setVar[afk;$authorID;yes] 
    `,
    unprefixed: false

}
