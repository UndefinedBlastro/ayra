module.exports = {
    name: "",
    type: "messageCreate",
    code:`
    $if[$channelID==1045369575333712002;
    $onlyIf[$isNumber[$message]]
    $if[$authorID==$getVar[countid;$guildID];$function[$deleteCommand] Let other's count too!!;
    $onlyIf[$message==$getVar[count;$guildID];    
    $function[$addMessageReactions[$channelID;$messageID;<:error:1190768784433229914>]]Wow! I guess you forgor how to count xd $wait[100000]
	$function[$deleteCommand]]
    $function[$addMessageReactions[$channelID;$messageID;<:success:1190768789403488357>]]
    $setVar[count;$guildID;$sum[$getVar[count;$guildID];1]]
    $setVar[countid;$guildID;$getMessage[$channelID;$messageID;authorID]]]

]
   
    `,
    unprefixed: false

}
