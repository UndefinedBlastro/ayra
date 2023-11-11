module.exports = {
name: "customboard",
type: "messageReactionAdd",
code:`$onlyIf[$reactionEmoji==$getVar[staremoji;$guildID];]
$onlyIf[$getMessageReactionCount[$channelID;$reactionMessageID;$getVar[staremoji;$guildID]]>=2;]$let[msg;$getMessage[$channelID;$reactionMessageID;content]]$sendMessage[$getVar[starchannel;$guildID];$title[$channelName[$channelID];https://discord.com/channels/$guildID/$channelID/$reactionMessageID]$color[Random]$description[$getMessage[$channelID;$reactionMessageID;content]]$author[$username[$getMessage[$channelID;$reactionMessageID;authorID]]]$thumbnail[$userAvatar[$getMessage[$channelID;$reactionMessageID;authorID]]]$footer[Ayra Star-Board]$description[$if[$get[msg]==;Error:Cannot Access This Message!;$get[msg]]]]`
}
