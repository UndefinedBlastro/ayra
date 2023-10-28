module.exports = {
    name: "banner",
    type: "messageCreate",
    code: ` $sendMessage[$channelID;$title[User Banner] $image[$userBanner[$mentioned[0;true]]
] $footer[$username;$userAvatar[$authorID]] $color[#c1baff]]`
}
