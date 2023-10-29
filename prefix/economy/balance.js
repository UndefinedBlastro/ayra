module.exports = {
    name: "balance",
    aliases: ["bal"],
    type: "messageCreate",
    code:` $sendMessage[$channelID; $author[$username;$userAvatar]$title[$username's Balance]
	$addField[Super cookies <:cookie_1f36a:1165922365763506176>;$getVar[supercookie;$authorID;0];true]
	$addField[Cookies <:scookie:1165922372138848267> ;$getVar[cookie;$authorID;0];true]
     $footer[Server Economy] $color[#c1baff]]
    `,
    unprefixed: false

}
