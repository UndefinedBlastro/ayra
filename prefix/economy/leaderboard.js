module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    type: "messageCreate",
    code:` $sendMessage[$channelID; $author[$username;$userAvatar]$title[Server Leaderboard]
	$description[$leaderboard[supercookie;info;rank;$return[$env[rank] | <@$env[info;id]> | $getVar[supercookie;$env[info;id]] | $getVar[cookie;$env[info;id]]]]]
     $footer[Server Economy] $color[#c1baff]]
    `,
    unprefixed: false

}
