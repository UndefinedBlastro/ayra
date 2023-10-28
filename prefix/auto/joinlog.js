module.exports = {
    name: "",
    type: "guildMemberAdd",
    code:`  $sendMessage[996803464996855939;$title[User Joined] $description[
    **User:** $username (<@$authorID>)
    **User ID:** $authorID
    **Joined At:** $timestamp 
    ** Member Count:** $guildMemberCount ]
        $footer[$username;$userAvatar[$authorID]] $color[#c1baff] $image[https://i.imgur.com/GUEUhHv.gif
]  Welcome, <@$authorID> ! ]`,
    unprefixed: false

}
