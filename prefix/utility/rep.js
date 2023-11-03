module.exports = {
    name: "rep",
    type: "messageCreate",
    code:``$let[mdid;Daily-$authorID]
$let[duration;$parseString[24h]]

$let[mdleft;$math[$getVar[$get[mdid];] - $getTimestamp]]

$if[$get[mdleft] > 0;
    $sendMessage[$channelID;Hey! You still have $parseMS[$get[mdleft]] until you can rep again smh]
    $stop
;
    $setVar[$get[mdid];;$math[$getTimestamp + $get[duration]]]
]
$setVar[Reputation Points;$mentioned[0;true];$sum[$getVar[Reputation Points;$mentioned[0;true]];1]]`,
    unprefixed: false

}
