module.exports = {
    name: "",
    code: `
$onlyIf[$and[$channelID==1113451860800569465;$messageType==GuildBoost]]
$sendMessage[1113451860800569465;
    $title[Thank you for boosting $userDisplayName]
    $description[
            . Thank you for boosting <@$authorID> ! <a:1005167440738660584:1163121131318947880>
            . we are now at $guildBoostCount boosts <a:1160635816385708093:1163122257124659330>
            . Check out our [perks\\](https://discordapp.com/channels/982931539941818408/983978053975818280) here  ‹𝟹
    ]
    $footer[$username;$userAvatar[$authorID]]
    $color[#c1baff]
    $image[https://i.imgur.com/GUEUhHv.gif]
	 $timestamp
    Thank you <@$authorID> !!

]`,
    type: "messageCreate",
    unprefixed: true
}
