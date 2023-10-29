module.exports = {
    name: "daily",
    type: "messageCreate",
    code:  `$let[mdid;Daily-$authorID]
$let[duration;$parseString[24h]]

$let[mdleft;$math[$getVar[$get[mdid];] - $getTimestamp]]

$if[$get[mdleft] > 0;
    $sendMessage[$channelID;Hey! Don't be greedy. You still have $parseMS[$get[mdleft]] until you can work again smh]
    $stop
;
    $setVar[$get[mdid];;$math[$getTimestamp + $get[duration]]]
]

$let[rare;$randomNumber[0;110]]
$let[cookieamount;$randomNumber[0;40]]
        $let[supercookieamount;$randomNumber[0;4]]

        $if[$get[rare]==100;$setVar[supercookie;$authorID;$sum[$getVar[supercookie;$authorID];$get[supercookieamount]]];$setVar[cookie;$authorID;$sum[$getVar[cookie;$authorID];$get[cookieamount]]]] <@$authorID> Claimed some $if[$get[rare]==100;Super Cookie;Cookie]`
}
