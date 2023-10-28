module.exports = {
    name: "avatar",
    type: "messageCreate",
    code: ` $sendMessage[$channelID;$title[User Avatar] $image[$userAvatar[$mentioned[0;true]]
] $footer[$username;$userAvatar[$authorID]] $color[#c1baff]]`
}
