module.exports = {
    name: "",
    type: "messageCreate",
    code: `$if[$isNumber[$getVar[level-$guildID;$authorID]];;$setVar[level-$guildID;$authorID;1]]$setVar[xp-$guildID;$authorID;$sum[$getVar[xp-$guildID;$authorID];$multi[$randomNumber[6;14;false];$getVar[level-$guildID;$authorID]]]]$if[$getVar[xp-$guildID;$authorID]>=$multi[230;$getVar[level-$guildID;$authorID]];$setVar[level-$guildID;$authorID;$sum[$getVar[level-$guildID;$authorID];1]]$setVar[xp-$guildID;$authorID;0]<@$authorID> has leveled up to level $getVar[level-$guildID;$authorID]. They've been rewarded with $multi[$getVar[level-$guildID;$authorID];10] cookies! $setVar[cookie;$authorID;$sum[$getVar[cookie;$authorID];$multi[$getVar[level-$guildID;$authorID];10]]]]`
}
