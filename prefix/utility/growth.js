module.exports = {
    name: "grow",
    type: "messageCreate",
    code:`$sendMessage[$channelID;$title[Server Members and Boost Count]
        $addField[Server Members;$guildMemberCount;true]
$addField[Boost Count;$guildBoostCount;true]$color[#c1baff]]`,
    unprefixed: true

}
