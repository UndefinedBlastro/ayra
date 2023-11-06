module.exports = {
    name: "avatar",
    type: "messageCreate",
    code: ` $sendMessage[$channelID;$title[> $userDisplayName[$mentioned[0;true]]'s' Avatar] $image[$userAvatar[$mentioned[0;true]]
] $footer[🖼 Avatar Fetched] $color[#c1baff]$author[🖼 Avatar Tool]$getTimestamp
$addActionRow
    $addButton[$userAvatar[$mentioned[0;true]];Avatar Link;Link]]`
}
