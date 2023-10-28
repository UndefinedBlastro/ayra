module.exports = {
name: "customboard",
type: "messageReactionAdd",
code:`$onlyIf[$reactionEmoji==$getVar[staremoji;$guildID];]
$onlyIf[$getMessageReactionCount[$channelID;$reactionMessageID;$getVar[staremoji;$guildID]]>=1;]$let[msg;$getMessage[$channelID;$reactionMessageID;content]]$sendMessage[$getVar[starchannel;$guildID];$reactionEmoji $getMessageReactionCount[$channelID;$reactionMessageID;$getVar[staremoji;$guildID]] <#$channelID> $color[Random]$addActionRow$addButton[https://discord.com/channels/$guildID/$channelID/$reactionMessageID;MSG-LINK;Link;$getVar[staremoji;$guildID]]$author[$username[$getMessage[$channelID;$reactionMessageID;authorID]];$userAvatar[$getMessage[$channelID;$messageID;authorID]]]$description[$if[$get[msg]==;Error:Cannot Access This Message!;$get[msg]]]]`
}
