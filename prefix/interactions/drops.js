module.exports = {
    type: "interactionCreate",
    code: `$if[$customID==cookiewinner;$let[rare;$randomNumber[0;11]]
        $if[$get[rare]==10;$setVar[supercookie;$authorID;$sum[1;$getVar[supercookie;$authorID]]];$setVar[cookie;$authorID;$sum[1;$getVar[cookie;$authorID]]]] $function[$editMessage[$channelID;$messageID;<@$authorID> Claimed 1 $if[$get[rare]==10;Super Cookie;Cookie]]]]`
    }
